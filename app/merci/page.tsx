import Link from "next/link";

const BRAND = {
  orange: "#ED6924",
  grayBg: "#F7F7F7",
  text: "#000",
};

export default function MerciPage() {
  const calendarUrl = "https://cal.eu/delphineravet/premier-echange";

  return (
    <main className="min-h-screen bg-white flex flex-col" style={{ color: BRAND.text }}>

      <section className="px-6 py-12" style={{ background: BRAND.grayBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest">
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: BRAND.orange }} aria-hidden />
            <span style={{ color: BRAND.orange }}>CONFIRMATION</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold">
            Message bien reçu.
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Merci de vous être manifesté(e). Je lis chaque demande attentivement
            et vous recontacte personnellement sous 24h.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 border rounded-xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: BRAND.orange }}>
              1
            </div>
            <h3 className="font-semibold mb-2">Analyse de votre demande</h3>
            <p className="text-sm text-gray-600">
              Je prends connaissance de votre situation et identifie
              les premiers leviers adaptés à votre contexte.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: BRAND.orange }}>
              2
            </div>
            <h3 className="font-semibold mb-2">Prise de contact sous 24h</h3>
            <p className="text-sm text-gray-600">
              Je vous réponds par email pour confirmer la réception
              de votre demande et vous proposer un premier échange.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: BRAND.orange }}>
              3
            </div>
            <h3 className="font-semibold mb-2">Entretien découverte</h3>
            <p className="text-sm text-gray-600">
              45 minutes pour faire le point ensemble sur vos priorités
              et voir comment je peux vous aider concrètement.
            </p>
          </div>

        </div>

        <div className="mt-10 p-8 border rounded-xl max-w-2xl">
          <h2 className="text-lg font-semibold mb-2">
            Vous préférez réserver directement un créneau ?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Choisissez un moment qui vous convient. Gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-xl font-semibold text-white"
              style={{ background: BRAND.orange }}
            >
              Choisir un créneau
            </a>
            <Link
              href="/"
              className="inline-flex justify-center items-center px-6 py-3 rounded-xl font-semibold border"
              style={{ borderColor: BRAND.orange, color: BRAND.orange }}
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
