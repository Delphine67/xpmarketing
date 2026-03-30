"use client";

const BRAND = {
  orange: "#ED6924",
  blueGray: "#2C5C7A",
  lightGray: "#DBDBDB",
  black: "#000000",
};

export default function ContactPage() {
  const mailTo = "xpmarketing@delphine-ravet.fr";
  const telephone = "07 70 28 64 69";

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-16 md:py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: BRAND.blueGray }}
          >
            Contact
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Parlons de votre situation
          </h1>

          <p className="mt-6 text-lg text-black/80 max-w-3xl leading-relaxed">
            Vous avez besoin d’un regard extérieur, d’un appui ponctuel ou d’un
            marketing externalisé ? Décrivez votre situation et je reviendrai
            vers vous rapidement.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-8">
            <h2 className="text-2xl font-bold">Envoyer un message</h2>

            <form className="mt-8 grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Nom</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Entreprise</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
                    placeholder="Nom de l’entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
                    placeholder="vous@entreprise.fr"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Téléphone</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
                    placeholder="06..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Votre besoin</label>
                <select className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white">
                  <option>Faire le point</option>
                  <option>Diagnostic</option>
                  <option>Mission ponctuelle</option>
                  <option>Mission projet</option>
                  <option>Marketing externalisé</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 bg-white min-h-[180px]"
                  placeholder="Décrivez votre situation, vos objectifs ou votre besoin."
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
                style={{ background: BRAND.orange }}
                onClick={() =>
                  (window.location.href = `mailto:${mailTo}?subject=Demande depuis XPMarketing`)
                }
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Coordonnées</h2>
              <div className="mt-6 space-y-4 text-black/80">
                <p>
                  <strong>Email :</strong>{" "}
                  <a href={`mailto:${mailTo}`} className="underline">
                    {mailTo}
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:0770286469" className="underline">
                    {telephone}
                  </a>
                </p>
                <p>
                  <strong>Zone :</strong> Île-de-France
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-8 text-white" style={{ background: BRAND.black }}>
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{ color: BRAND.orange }}
              >
                Premier échange
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Un premier échange permet souvent de clarifier rapidement votre besoin
                et d’identifier la formule la plus adaptée.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}