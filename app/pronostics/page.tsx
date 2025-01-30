'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Pronostic = {
  id: string;
  title: string;
  content: string;
  isPremium: boolean;
  createdAt: string;
};

export default function PronosticsPage() {
  const { data: session } = useSession();
  const [pronostics, setPronostics] = useState<Pronostic[]>([]);
  const isPremium = session?.user?.subscription?.type === 'PREMIUM';

  useEffect(() => {
    const fetchPronostics = async () => {
      try {
        const response = await fetch('/api/pronostics');
        const data = await response.json();
        setPronostics(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des pronostics:', error);
      }
    };

    fetchPronostics();
  }, []);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Accès Restreint</h1>
        <p className="text-gray-600 mb-4">
          Vous devez être connecté pour voir les pronostics.
        </p>
        <Link
          href="/auth/login"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Se connecter
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pronostics
          </h1>
          {!isPremium && (
            <p className="mt-4 text-lg text-gray-600">
              Passez à l'abonnement Premium pour accéder à tous les pronostics
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pronostics.map((pronostic) => (
            <div
              key={pronostic.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              {pronostic.isPremium && !isPremium && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                  <span className="text-xl font-bold mb-2">Contenu Premium</span>
                  <Link
                    href="/subscription"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  >
                    Passer à Premium
                  </Link>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{pronostic.title}</h2>
                  {pronostic.isPremium && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2.5 py-0.5 rounded">
                      PREMIUM
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {(!pronostic.isPremium || isPremium) 
                    ? pronostic.content 
                    : 'Contenu réservé aux membres Premium'}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  {new Date(pronostic.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
