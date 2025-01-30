'use client'

import { motion } from 'framer-motion'

export default function APropos() {
  const experts = [
    {
      name: 'Julien Moreau',
      role: 'Expert Principal & Fondateur',
      description: 'Fondateur d\'Expert Pronostics et analyste de données sportives. Expert en football et paris sportifs depuis plus de 10 ans, développant des modèles prédictifs innovants.',
      stats: [
        { label: 'Taux de réussite', value: '92%' },
        { label: 'Pronostics', value: '50K+' },
        { label: 'Expérience', value: '10 ans' }
      ]
    },
    {
      name: 'David Martinez',
      role: 'Expert en Analyse Statistique',
      description: 'Spécialiste en analyse de données et modélisation statistique. Expert en football européen et international, développant des algorithmes prédictifs de pointe.',
      stats: [
        { label: 'Taux de réussite', value: '89%' },
        { label: 'Analyses', value: '25K+' },
        { label: 'Expérience', value: '8 ans' }
      ]
    }
  ]

  const values = [
    {
      title: 'Expertise',
      description: 'Notre équipe d\'experts combine des décennies d\'expérience dans le sport et l\'analyse de données.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Transparence',
      description: 'Nous partageons ouvertement nos analyses et nos résultats pour que vous puissiez prendre des décisions éclairées.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Nous utilisons les dernières technologies et méthodes d\'analyse pour vous offrir les meilleurs pronostics.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert Pronostics, votre partenaire de confiance pour des pronostics sportifs précis et fiables.
          </p>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Équipe d'Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {experts.map((expert, index) => (
              <div key={index} className="relative">
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform -rotate-2"></div>
                
                {/* Main Card Content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  {/* Expert Avatar */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white">
                      {expert.name.charAt(0)}
                    </div>
                  </div>

                  {/* Expert Info */}
                  <div className="pt-14 text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{expert.role}</p>
                    <p className="text-gray-600">{expert.description}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                    {expert.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    {value.icon}
                  </div>
                </div>
                <div className="text-center pt-8">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
