'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
      : 'bg-white shadow-lg'
  }`;

  const linkClasses = `inline-flex items-center pt-1 border-b-2 border-transparent px-6 text-sm font-medium ${
    isHomePage && !isScrolled
                    ? 'text-white hover:text-gray-200 hover:border-white'
                    : 'text-gray-900 hover:border-gray-300 '
  }`;

  const titleClasses = `ml-2 text-xl font-bold ${
    isHomePage && !isScrolled ? 'text-white' : 'text-blue-900'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <span className={titleClasses}>Expert Pronostics</span>
          </Link>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/offres"
                  className={linkClasses}

                >
                  Abonnements
                </Link>
                <Link
                  href="/articles"
                  className={linkClasses}

                >
                  Articles
                </Link>
                
                <Link
                  href="/dashboard"
                  className={linkClasses}

                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className={linkClasses}

                >
                  Profil
                </Link>
                <button
                  onClick={() => signOut()}
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-gray-900'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                            <Link
              href="/offres"
              className={linkClasses}
            >
              Abonnements
            </Link>
              <Link
                href="/resultats"
                className={linkClasses}
              >
                Résultats
              </Link>
            <Link
              href="/articles"
              className={linkClasses}
            >
              Articles
            </Link>
              <Link
                href="/a-propos"
                className={linkClasses}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className={linkClasses}
              >
                Contact
              </Link>

                <Link
                  href="/auth/login"
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:text-gray-200'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Se connecter
                </Link>
                <Link
                  href="/auth/register"
                  className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}