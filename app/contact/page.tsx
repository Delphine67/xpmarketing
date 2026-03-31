"use client";

const BRAND = {
  orange: "#ED6924",
  blueGray: "#2C5C7A",
  lightGray: "#DBDBDB",
  black: "#000000",
};

export default function ContactPage() {

  const formAction = "https://formspree.io/f/xlgonobp"; 
  const mailTo = "delphine@xpmarketing.fr";
  const calendarUrl = "https://calendly.com/dravet78/30min";
  const telephone = "07 70 28 64 69";

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="px-6 py-16" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: BRAND.blueGray }}>
            Contact
          </p>

          <h1 className="text-4xl font-bold mt-4">
            Parlons de votre situation
          </h1>

          <p className="mt-4 max-w-3xl">
            Vous avez besoin d'un regard extérieur, d'un appui ponctuel ou d'un marketing externalisé ? Décrivez votre besoin et je reviens vers vous rapidement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* FORM */}
          <form action={formAction} method="POST" className="bg-[#F7F7F7] p-8 rounded-2xl">

            <input type="hidden" name="_subject" value="Contact XPMarketing" />

            <div className="grid md:grid-cols-2 gap-6">
              <input name="nom" required placeholder="Nom *" className="input" />
              <input name="entreprise" required placeholder="Entreprise *" className="input" />
              <input name="email" type="email" required placeholder="Email *" className="input" />
              <input name="telephone" placeholder="Téléphone" className="input" />
            </div>

            <select name="besoin" className="input mt-6">
              <option>Faire le point</option>
              <option>Diagnostic</option>
              <option>Mission ponctuelle</option>
              <option>Mission projet</option>
              <option>Marketing externalisé</option>
              <option>A définir ensembles</option>
            </select>

            <textarea name="message" required placeholder="Votre message" className="input mt-6 min-h-[150px]" />

            <button type="submit" className="mt-6 px-6 py-3 rounded-xl text-white font-semibold"
              style={{ background: BRAND.orange }}>
              Envoyer la demande
            </button>
          </form>

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <p><strong>Email :</strong> <a href={`mailto:${mailTo}`}>{mailTo}</a></p>
              <p><strong>Téléphone :</strong> {telephone}</p>
            </div>

            <a href={calendarUrl} target="_blank"
              className="block text-center p-4 rounded-xl text-white"
              style={{ background: BRAND.orange }}>
              Prendre rendez-vous
            </a>

          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section className="px-6 pb-20">
        <iframe src={calendarUrl} width="100%" height="700"></iframe>
      </section>

    </main>
  );
}