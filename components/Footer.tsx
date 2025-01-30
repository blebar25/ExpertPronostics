import Link from 'next/link';
import { BASE_PATH } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Section À propos */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Expert Pronostics</h3>
            <p className="text-gray-300 mb-6">
              Leader dans les pronostics sportifs depuis plus de 10 ans. 
              Notre expertise et notre engagement envers l'excellence nous permettent 
              d'offrir les meilleurs conseils à nos clients.
            </p>
          </div>

          {/* Section Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`${BASE_PATH}/offres`} className="text-gray-300 hover:text-white transition-colors">
                  Abonnements
                </Link>
              </li>
              <li>
                <Link href={`${BASE_PATH}/articles`} className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href={`${BASE_PATH}/a-propos`} className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href={`${BASE_PATH}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contact@expert-pronostics.fr</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Lun - Jeu: 9h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section bas de page */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Expert Pronostics. Tous droits réservés.
            </p>
            <div className="flex space-x-6 md:justify-end">
              <Link href={`${BASE_PATH}/mentions-legales`} className="text-gray-400 hover:text-white text-sm">
                Mentions légales
              </Link>
              <Link href={`${BASE_PATH}/politique-de-confidentialite`} className="text-gray-400 hover:text-white text-sm">
                Politique de confidentialité
              </Link>
              <Link href={`${BASE_PATH}/cgv`} className="text-gray-400 hover:text-white text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
