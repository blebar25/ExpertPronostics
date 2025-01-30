'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';

interface Subscription {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  lastPaymentDate: string;
  active: boolean;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      if (session?.user?.id) {
        try {
          console.log('Session actuelle:', session);
          console.log('ID utilisateur:', session.user.id);
          console.log('Récupération des détails de l\'abonnement...');
          
          const response = await fetch('/api/subscription-details');
          const data = await response.json();
          console.log('Détails de l\'abonnement reçus:', data);
          
          if (data.subscription) {
            console.log('Type d\'abonnement:', data.subscription.type);
            console.log('Actif:', data.subscription.active ? 'Oui' : 'Non');
            console.log('Date de début:', new Date(data.subscription.startDate).toLocaleDateString());
            console.log('Date de fin:', new Date(data.subscription.endDate).toLocaleDateString());
            console.log('Dernier paiement:', new Date(data.subscription.lastPaymentDate).toLocaleDateString());
          } else {
            console.log('Aucun abonnement trouvé pour cet utilisateur');
          }
          
          setSubscription(data.subscription);
        } catch (error) {
          console.error('Erreur lors de la récupération des détails de l\'abonnement:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log('Pas de session ou d\'ID utilisateur:', session);
        setIsLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchSubscriptionDetails();
    }
  }, [session, status]);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Mot de passe modifié avec succès');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError('');
      } else {
        setError(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la modification du mot de passe');
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Profil Utilisateur</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{session?.user?.email}</p>
            </div>
            
            <div>
              <p className="text-gray-600">Nom</p>
              <p className="font-medium">{session?.user?.name || 'Non défini'}</p>
            </div>

            {subscription ? (
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-semibold mb-3">Détails de l'abonnement</h3>
                <div className="space-y-2">
                  <p>
                    <span className="text-gray-600">Type : </span>
                    <span className="font-medium">{subscription.type}</span>
                  </p>
                  <p>
                    <span className="text-gray-600">Statut : </span>
                    <span className={`font-medium ${subscription.active ? 'text-green-600' : 'text-red-600'}`}>
                      {subscription.active ? 'Actif' : 'Inactif'}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-600">Date de début : </span>
                    <span className="font-medium">
                      {new Date(subscription.startDate).toLocaleDateString()}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-600">Date de fin : </span>
                    <span className="font-medium">
                      {new Date(subscription.endDate).toLocaleDateString()}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-600">Dernier paiement : </span>
                    <span className="font-medium">
                      {new Date(subscription.lastPaymentDate).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="border-t pt-4 mt-4">
                <p className="text-gray-600">Aucun abonnement actif</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Changer le mot de passe</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-700 p-3 rounded">
                {success}
              </div>
            )}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Mot de passe actuel
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Changer le mot de passe
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => signOut()}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
