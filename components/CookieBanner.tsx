'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BASE_PATH } from '../lib/constants'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre{' '}
            <Link href={`${BASE_PATH}/politique-de-confidentialite`} className="underline hover:text-blue-400">
              politique de confidentialité
            </Link>
            .
          </div>
          <div className="flex gap-4">
            <button
              onClick={refuseCookies}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
