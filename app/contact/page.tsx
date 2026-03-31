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

  const chipStyle = "border px-3 py-1.5 rounded-full text-sm cursor-pointer transition";
  const inputStyle = "mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-black outline-none";

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="px-6 py-12" style={{ background: BRAND.grayBg }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Parlons de votre situation</h1>
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

              {/* INPUTS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label>Nom *</label>
                  <input name="nom" required className={inputStyle} />
                </div>

                <div>
                  <label>Entreprise *</label>
                  <input name="entreprise" required className={inputStyle} />
                </div>

                <div className="md:col-span-2">
                  <label>Email *</label>
                  <input name="email" type="email" required className={inputStyle} />
                </div>

                <div className="md:col-span-2">
                  <label>Téléphone</label>
                  <input name="telephone" className={inputStyle} />
                </div>
              </div>

              {/* BESOIN */}
              <div className="mt-8">
                <label>Votre besoin</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Faire le point",
                    "Diagnostic",
                    "Mission ponctuelle",
                    "Mission projet",
                    "Marketing externalisé",
                  ].map((item) => (
                    <label key={item}>
                      <input type="checkbox" name="besoin[]" value={item} className="hidden peer" />
                      <span className={`${chipStyle} peer-checked:bg-orange-500 peer-checked:text-white`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* FORMAT */}
              <div className="mt-8">
                <label>Format souhaité</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Mission ponctuelle",
                    "Mission projet",
                    "Accompagnement récurrent",
                  ].map((item) => (
                    <label key={item}>
                      <input type="radio" name="format" value={item} className="hidden peer" />
                      <span className={`${chipStyle} peer-checked:bg-orange-500 peer-checked:text-white`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-8">
                <label>Message *</label>
                <textarea name="message" required className={`${inputStyle} min-h-[150px]`} />
              </div>

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