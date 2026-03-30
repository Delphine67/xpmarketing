export default function Confidentialite() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">
        Politique de confidentialité
      </h1>

      <section className="space-y-6 text-black/80 leading-relaxed">

        <p>
          Cette politique explique comment les données personnelles sont collectées
          et utilisées sur le site XPMarketing.
        </p>

        <div>
          <h2 className="font-semibold">Données collectées</h2>
          <p>
            Les données collectées via le formulaire de contact peuvent inclure :
            nom, email, téléphone et message.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Finalité</h2>
          <p>
            Ces données sont utilisées uniquement pour répondre à votre demande
            et échanger avec vous.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Durée de conservation</h2>
          <p>
            Les données sont conservées pendant une durée maximale de 3 ans.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Droits</h2>
          <p>
            Vous pouvez demander l’accès, la modification ou la suppression
            de vos données à : delphine@xpmarketing.fr
          </p>
        </div>

      </section>
    </main>
  );
}