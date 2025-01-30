export default function CommentCaMarche() {
  const steps = [
    {
      title: "1. Choisissez votre offre",
      description: "Sélectionnez l'abonnement qui correspond le mieux à vos besoins et à votre budget.",
      icon: "💎"
    },
    {
      title: "2. Créez votre compte",
      description: "Inscrivez-vous en quelques clics et accédez immédiatement à votre espace membre.",
      icon: "👤"
    },
    {
      title: "3. Recevez vos pronostics",
      description: "Consultez quotidiennement nos pronostics détaillés et nos analyses approfondies.",
      icon: "📊"
    },
    {
      title: "4. Placez vos paris",
      description: "Suivez nos recommandations et placez vos paris en toute confiance.",
      icon: "🎯"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Comment ça marche ?</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez comment ExpertPronostics vous aide à optimiser vos paris sportifs en quelques étapes simples.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Analyse statistique approfondie</h3>
              <p className="text-gray-600 mb-6">
                Nous analysons des centaines de données statistiques pour chaque match : forme des équipes, confrontations directes, absences, conditions météo, etc.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Historique des confrontations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Forme actuelle des équipes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Statistiques des joueurs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Expertise humaine</h3>
              <p className="text-gray-600 mb-6">
                Nos experts sportifs apportent leur connaissance approfondie du sport pour affiner les prédictions statistiques.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Analyse tactique
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Suivi des actualités
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Veille contextuelle
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conseils pour réussir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Gestion de bankroll</h3>
              <p className="text-gray-600">
                Apprenez à gérer votre budget de paris de manière responsable pour maximiser vos gains sur le long terme.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Discipline</h3>
              <p className="text-gray-600">
                Suivez une stratégie cohérente et évitez les paris impulsifs pour maintenir une progression stable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Patience</h3>
              <p className="text-gray-600">
                Les résultats se construisent sur la durée. Gardez votre calme et suivez notre stratégie avec constance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez ExpertPronostics dès maintenant et bénéficiez de nos analyses expertes pour vos paris sportifs.
          </p>
          <a
            href="/offres"
            className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Voir nos offres
          </a>
        </div>
      </section>
    </div>
  )
}
