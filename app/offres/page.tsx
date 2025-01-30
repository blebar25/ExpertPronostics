'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Offres() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const standardMonthly = 14.90
  const standardAnnual = standardMonthly * 12 * 0.9 // 10% de réduction
  const premiumMonthly = 24.90
  const premiumAnnual = premiumMonthly * 12 * 0.9 // 10% de réduction

  const faqs = [
    {
      question: "Comment accéder aux pronostics VIP ?",
      answer: "Les pronostics VIP sont disponibles via notre abonnement premium. Une fois inscrit, vous recevrez un accès immédiat à notre plateforme sécurisée où tous nos pronostics VIP sont publiés."
    },
    {
      question: "Quelle est la différence entre l'offre Standard et Premium ?",
      answer: "L'offre Standard inclut les pronostics de base avec un taux de réussite de 75%, tandis que l'offre Premium vous donne accès à nos meilleurs pronostics VIP avec un taux de réussite de 92%, ainsi qu'à des analyses détaillées et un support personnalisé."
    },
    {
      question: "Quand les pronostics sont-ils publiés ?",
      answer: "Nos pronostics sont publiés chaque jour avant 14h, vous permettant d'avoir suffisamment de temps pour placer vos paris. Les abonnés Premium reçoivent également des pronostics exclusifs."
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment. L'annulation prendra effet à la fin de votre période de facturation en cours, et vous ne serez pas facturé pour le mois suivant."
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribe = async (plan: 'standard' | 'premium') => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/offres');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          isAnnual,
          userId: session?.user?.id
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Erreur:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la création de la session:', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos offres de pronostics sportifs</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Choisissez l'offre qui correspond le mieux à vos besoins et commencez à optimiser vos paris sportifs dès aujourd'hui.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-200">Taux de réussite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Pronostics réalisés</div>
            </div>
          </div>
          
          {/* Toggle annuel/mensuel */}
          <div className="flex items-center justify-center gap-4">
            <span className={`${!isAnnual ? 'text-white' : 'text-blue-200'}`}>Mensuel</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`${isAnnual ? 'text-white' : 'text-blue-200'}`}>Annuel (-10%)</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="border rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Offre Standard</h3>
                <div className="text-4xl font-bold mb-2">
                  {isAnnual ? `${Math.round(standardAnnual)}€` : `${standardMonthly}€`}
                  <span className="text-lg font-normal text-gray-600">/{isAnnual ? 'an' : 'mois'}</span>
                </div>
                {isAnnual && (
                  <div className="text-green-600 text-sm font-medium">
                    Économisez {Math.round(standardMonthly * 12 * 0.1)}€ par an
                  </div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Pronostics des 5 grands championnats européens
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Analyses détaillées des matchs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Support par email
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Historique des pronostics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Statistiques de performance
                </li>
              </ul>
              <button 
                onClick={() => handleSubscribe('standard')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
                Commencer maintenant
              </button>
            </div>

            {/* Premium Plan */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Populaire
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Offre Premium</h3>
                <div className="text-4xl font-bold mb-2">
                  {isAnnual ? `${Math.round(premiumAnnual)}€` : `${premiumMonthly}€`}
                  <span className="text-lg font-normal text-gray-600">/{isAnnual ? 'an' : 'mois'}</span>
                </div>
                {isAnnual && (
                  <div className="text-green-600 text-sm font-medium">
                    Économisez {Math.round(premiumMonthly * 12 * 0.1)}€ par an
                  </div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Tout de l'offre Standard
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Pronostics sur plus de championnats
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Support par email prioritaire
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Analyses approfondies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Statistiques avancées
                </li>
              </ul>
              <button 
                onClick={() => handleSubscribe('premium')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
                Commencer maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className="ml-6">
                    <svg
                      className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                        openQuestion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openQuestion === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à commencer ?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Rejoignez des milliers de parieurs satisfaits et commencez à gagner avec nos pronostics experts.
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Commencer maintenant
          </button>
        </div>
      </section>
    </div>
  )
}
