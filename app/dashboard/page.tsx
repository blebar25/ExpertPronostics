'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const NoSubscriptionMessage = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-lg shadow-sm p-8 mt-24">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Bienvenue sur Expert Pronostics
    </h2>
    <p className="text-gray-600 text-center mb-8 max-w-md">
      Veuillez prendre un abonnement afin d'avoir accès à tous nos pronostics et maximiser vos chances de gains.
    </p>
    <Link
      href="/offres"
      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
    >
      Voir les abonnements
    </Link>
  </div>
);

interface TabProps {
  active: string;
  onTabChange: (tab: string) => void;
}

const PronosticTabs = ({ active, onTabChange }: TabProps) => (
  <div className="border-b border-gray-200 mb-6">
    <nav className="-mb-px flex space-x-8">
      <button
        onClick={() => onTabChange('championnat')}
        className={`py-4 px-1 border-b-2 font-medium text-sm ${
          active === 'championnat'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
      >
        Pronostics Championnat
      </button>
      <button
        onClick={() => onTabChange('montante')}
        className={`py-4 px-1 border-b-2 font-medium text-sm ${
          active === 'montante'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
      >
        Montante
      </button>
      <button
        onClick={() => onTabChange('paris')}
        className={`py-4 px-1 border-b-2 font-medium text-sm ${
          active === 'paris'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
      >
        Paris du Jour
      </button>
    </nav>
  </div>
);

const ChampionnatPronostics = () => {
  const leagues = [
    { name: 'Ligue 1', matches: [] },
    { name: 'Premier League', matches: [] },
    { name: 'La Liga', matches: [] },
    { name: 'Serie A', matches: [] },
    { name: 'Bundesliga', matches: [] },
    { name: 'Ligue 2', matches: [] },
    { name: 'Bundesliga 2', matches: [] },
    { name: 'Eredivisie', matches: [] },
    { name: 'Liga Portugal', matches: [] },
    { name: 'Super Lig', matches: [] },
    { name: 'Ligue des Champions', matches: [] },
    { name: 'Ligue Europa', matches: [] },
  ];

  return (
    <div className="space-y-8">
      {leagues.map((league) => (
        <div key={league.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{league.name}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Match
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pronostic
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucun match disponible pour le moment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

const MontantePronostics = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-2">Méthode Montante</h3>
      <p className="text-gray-600">
        Notre méthode montante commence avec une mise de base de 100€. L'objectif est d'atteindre 500€ minimum.
        Une fois les 500€ atteints, nous retirons la mise initiale de 100€ et continuons avec les gains.
        Ce cycle se répète chaque mois.
      </p>
    </div>
    <div className="border rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mise
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pronostic
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Résultat
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gains
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
              Les pronostics montante seront disponibles prochainement
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ParisPronostics = () => {
  const today = new Date();
  const isWeekend = today.getDay() === 0 || today.getDay() === 6;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Paris du Jour</h3>
        <p className="text-gray-600">
          {isWeekend
            ? 'Retrouvez nos paris spéciaux pour ce weekend'
            : 'Les paris du jour sont mis à jour quotidiennement'}
        </p>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Match
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pronostic
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cote
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                Aucun paris disponible pour le moment
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('championnat');
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch('/api/check-subscription');
          const data = await response.json();
          setHasSubscription(data.hasActiveSubscription);
        } catch (error) {
          console.error('Erreur lors de la vérification de l\'abonnement:', error);
        }
      }
    };

    if (session) {
      checkSubscription();
    }
  }, [session]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    router.push('/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hasSubscription ? (
          <NoSubscriptionMessage />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Vos Pronostics
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Retrouvez tous nos pronostics mis à jour quotidiennement
              </p>
            </div>

            <PronosticTabs active={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'championnat' && <ChampionnatPronostics />}
            {activeTab === 'montante' && <MontantePronostics />}
            {activeTab === 'paris' && <ParisPronostics />}
          </>
        )}
      </div>
    </div>
  );
}
