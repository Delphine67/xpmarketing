"use client";

const BRAND = {
  orange: "#ED6924",
  grayBg: "#F7F7F7",
  text: "#000",
};

export default function ContactPage() {

  const formAction = "https://formspree.io/f/xlgonobp";
  const mailTo = "delphine@xpmarketing.fr";
  const calendarUrl = "https://calendly.com/dravet78/30min";
  const telephone = "07 70 28 64 69";

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="px-6 py-12" style={{ background: BRAND.grayBg }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">
            Parlons de votre situation
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Vous avez besoin d'un regard extérieur, d'un appui ponctuel ou d'un marketing externalisé ? Décrivez votre besoin et je reviens vers vous rapidement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="lg:col-span-2">
            <form action={formAction} method="POST"
              className="bg-white rounded-2xl border p-8 shadow-sm">

              <input type="hidden" name="_subject" value="Contact XPMarketing" />

              <div className="grid md:grid-cols-2 gap-6">
                <input name="nom" required placeholder="Nom *" className="input" />
                <input name="entreprise" required placeholder="Entreprise *" className="input" />
                <input name="email" type="email" required placeholder="Email *" className="input md:col-span-2" />
                <input name="telephone" placeholder="Téléphone" className="input md:col-span-2" />
              </div>

              <textarea name="message" required placeholder="Votre message"
                className="mt-6 w-full min-h-[150px] input" />

              <button type="submit"
                className="mt-6 px-6 py-3 rounded-xl text-white font-semibold"
                style={{ background: BRAND.orange }}>
                Envoyer la demande →
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Zone d'intervention</h3>
              <p>Île-de-France</p>
              <p className="mt-3">{mailTo}</p>
              <p>{telephone}</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Premier échange</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Analyse rapide</li>
                <li>✓ Recommandations concrètes</li>
                <li>✓ Orientation claire</li>
              </ul>

              <a href={calendarUrl} target="_blank"
                className="mt-4 block text-center px-4 py-3 rounded-xl text-white"
                style={{ background: BRAND.orange }}>
                Prendre rendez-vous
              </a>

              <a href={`mailto:${mailTo}`}
                className="mt-3 block text-center px-4 py-3 border rounded-xl"
                style={{ color: BRAND.orange, borderColor: BRAND.orange }}>
                Envoyer un e-mail
              </a>
            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}