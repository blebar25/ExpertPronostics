export default function PolitiqueConfidentialite() {
  return (


    <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Politique de Confidentialité</h1>
      </div>
    </section>
    <div className="container mx-auto px-4">
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
            <p className="text-gray-700">
              Nous collectons les données suivantes :
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Informations d'identification (nom, prénom, email)</li>
              <li>Données de connexion et d'utilisation du service</li>
              <li>Informations de paiement</li>
              <li>Préférences de communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Gérer votre compte et vous fournir nos services</li>
              <li>Personnaliser votre expérience</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, 
              modification, divulgation ou destruction non autorisée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Vos droits</h2>
            <p className="text-gray-700">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="text-gray-700">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez contrôler l'utilisation 
              des cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
              contactez-nous à :<br />
              Email : contact@expert-pronostics.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
