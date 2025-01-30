export default function MentionsLegales() {
  return (

    <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Mentions Légales</h1>
      </div>
    </section>

      <div className="container mx-auto px-4">
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p className="text-gray-700">
              Le site Expert Pronostics est édité par :<br />
              TIC TAC SAS<br />
              6 RUE NEUVE SAINT MARTIN 13001 MARSEILLE<br />
              Capital social : 500 euros<br />
              SIRET : 92505876000016<br />
              TVA Intracommunautaire : FR84925058760
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p className="text-gray-700">
              Le site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Directeur de la publication</h2>
            <p className="text-gray-700">
              Contactable à : contact@expert-pronostics.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation, totale ou partielle, de ce site ou de son contenu est interdite 
              sans l'autorisation expresse d'Expert Pronostics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
            <p className="text-gray-700">
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées 
              dans notre Politique de Confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
              Email : contact@expert-pronostics.fr
              </p>
          </section>
        </div>
      </div>
    </div>
  );
}
