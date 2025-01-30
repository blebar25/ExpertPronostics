export default function CGV() {
  return (

    <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Conditions Générales de Vente</h1>
      </div>
    </section>
    <div className="container mx-auto px-4">
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-gray-700">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations entre Expert Pronostics 
              et ses clients dans le cadre de la vente de services de pronostics sportifs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-gray-700">
              Expert Pronostics propose des services de pronostics sportifs sous forme d'abonnements :
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Abonnement Standard : 14,90€/mois ou 160,92€/an</li>
              <li>Abonnement Premium : 24,90€/mois ou 268,92€/an</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Souscription et paiement</h2>
            <p className="text-gray-700">
              La souscription s'effectue en ligne sur notre site. Le paiement peut être effectué par carte bancaire 
              ou tout autre moyen proposé sur le site. Les prix sont indiqués en euros TTC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Durée et résiliation</h2>
            <p className="text-gray-700">
              Les abonnements sont souscrits pour une durée d'un mois ou d'un an selon la formule choisie. 
              L'abonnement est automatiquement reconduit sauf résiliation par le client au moins 48 heures 
              avant la fin de la période en cours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Droit de rétractation</h2>
            <p className="text-gray-700">
              Conformément à l'article L221-18 du Code de la consommation, le client dispose d'un délai de 
              14 jours pour exercer son droit de rétractation. Ce délai court à compter de la souscription 
              de l'abonnement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Responsabilité</h2>
            <p className="text-gray-700">
              Expert Pronostics s'efforce de fournir des pronostics de qualité mais ne peut garantir leur exactitude. 
              Les pronostics sont fournis à titre informatif et ne constituent en aucun cas des conseils d'investissement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble du contenu fourni dans le cadre des services est protégé par le droit d'auteur et reste 
              la propriété exclusive d'Expert Pronostics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modification des CGV</h2>
            <p className="text-gray-700">
              Expert Pronostics se réserve le droit de modifier les présentes CGV à tout moment. Les clients 
              seront informés de toute modification par email.
            </p>
          </section>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 8 - Droit de rétractation</h2>
            <div className="space-y-4">
              <p>
                Conformément aux articles L221-18 et suivants du Code de la consommation, vous disposez d'un délai de rétractation de 14 jours à compter de la souscription de votre abonnement.
              </p>
              
              <h3 className="text-xl font-semibold mt-4">8.1 Conditions d'exercice du droit de rétractation</h3>
              <p>
                Le droit de rétractation peut être exercé uniquement dans les conditions suivantes :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>La demande doit être effectuée dans les 14 jours suivant la date de souscription initiale</li>
                <li>L'abonnement ne doit pas avoir fait l'objet d'un renouvellement</li>
                <li>L'utilisateur ne doit pas avoir consulté les pronostics pendant plus d'une journée (la consultation est tracée via les connexions à la plateforme)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">8.2 Exceptions au droit de rétractation</h3>
              <p>
                Le droit de rétractation ne peut plus être exercé dans les cas suivants :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>L'abonnement a dépassé les 14 premiers jours</li>
                <li>L'abonnement a fait l'objet d'un renouvellement (le renouvellement ne réinitialise pas le délai de rétractation)</li>
                <li>L'utilisateur a consulté les pronostics sur plus d'une journée</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">8.3 Procédure de rétractation</h3>
              <p>
                Pour exercer votre droit de rétractation, vous devez nous notifier votre décision par email à l'adresse contact@expert-pronostics.fr en indiquant clairement votre intention de vous rétracter. Un formulaire de rétractation est disponible sur demande.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces CGV, vous pouvez nous contacter à :<br />
              Email : contact@expert-pronostics.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
