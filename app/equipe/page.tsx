export default function Equipe() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Notre équipe</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des experts passionnés avec plus de 10 ans d'expérience dans l'analyse sportive
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Expert 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">ML</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Marc Laurent</h3>
                <p className="text-blue-600 font-medium">Analyste en chef</p>
              </div>
              <p className="text-gray-600 mb-6">
                Avec plus de 15 ans d'expérience dans l'analyse sportive, Marc a développé une expertise 
                pointue dans les championnats européens majeurs. Ancien analyste pour des médias sportifs 
                de renom, il a créé une méthodologie unique combinant analyse statistique et connaissance 
                approfondie du terrain.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Spécialiste des 5 grands championnats européens
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Expert en analyse statistique avancée
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Taux de réussite moyen de 92%
                </div>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">TD</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thomas Dubois</h3>
                <p className="text-blue-600 font-medium">Expert en analyse de données</p>
              </div>
              <p className="text-gray-600 mb-6">
                Fort de 12 ans d'expérience dans l'analyse de données sportives, Thomas a développé des 
                modèles prédictifs sophistiqués. Son expertise en science des données et sa passion pour 
                le sport lui permettent d'identifier les meilleures opportunités de paris avec une 
                précision remarquable.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Expert en modélisation prédictive
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Analyse approfondie des statistiques
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Développement d'algorithmes prédictifs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-gray-600">Taux de réussite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Pronostics réalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à rejoindre nos membres satisfaits ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profitez de l'expertise de notre équipe pour optimiser vos paris sportifs.
          </p>
          <a
            href="/offres"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Voir nos offres
          </a>
        </div>
      </section>
    </div>
  )
}
