const BRAND = {
  orange: "#ED6924",
  blueGray: "#2C5C7A",
  lightGray: "#DBDBDB",
  black: "#000000",
  orangeSoft: "#FCE8DD",
};

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
      style={{ color: BRAND.blueGray }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
      {children}
    </h1>
  );
}

export default function ExpertisePage() {
  const expertises = [
    {
      title: "Clarifier votre offre",
      text: "Quand votre offre est difficile à comprendre, il devient plus compliqué de convaincre. Je vous aide à la rendre plus lisible, plus structurée et plus convaincante.",
    },
    {
      title: "Mieux présenter votre entreprise",
      text: "Supports commerciaux, messages, argumentaires, site internet, communication : nous remettons de la cohérence pour mieux valoriser votre activité.",
    },
    {
      title: "Développer votre visibilité",
      text: "L’objectif n’est pas d’être visible partout, mais d’être visible là où cela a du sens pour votre entreprise et vos clients.",
    },
    {
      title: "Structurer vos actions marketing",
      text: "Vous avez besoin d’un cadre, d’un plan d’action et d’une logique simple pour ne plus avancer dans tous les sens.",
    },
    {
      title: "Soutenir votre développement commercial",
      text: "Le marketing doit aider concrètement le commerce : mieux expliquer l’offre, ouvrir des portes, appuyer les échanges et renforcer la crédibilité.",
    },
    {
      title: "Piloter plus clairement vos actions",
      text: "Je vous aide à savoir ce qui mérite d’être poursuivi, ajusté ou arrêté pour éviter de perdre du temps et du budget.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-16 md:py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Expertise</SectionTag>
          <SectionTitle>
            Un marketing concret au service
            <br />
            du développement de votre entreprise
          </SectionTitle>

          <p className="mt-6 text-lg text-black/80 max-w-3xl leading-relaxed">
            Le marketing n’a de valeur que s’il aide réellement votre entreprise à
            avancer. Mon rôle est de rendre votre marketing plus utile, plus lisible
            et plus efficace.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {expertises.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ background: BRAND.orange }}
              >
                +
              </div>
              <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 text-black/75 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-5xl mx-auto">
          <SectionTag>Pour qui ?</SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Principalement pour les PME industrielles, de services et B2B
          </h2>

          <p className="mt-6 text-lg text-black/80 leading-relaxed">
            J’interviens principalement auprès de PME qui veulent structurer leur
            développement sans recruter un responsable marketing en interne.
            Mais cette approche convient aussi à d’autres entreprises qui ont besoin
            d’un regard extérieur, d’une méthode claire et d’actions réellement utiles.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Passons à l’action</SectionTag>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Vous avez besoin d’y voir plus clair ?
          </h2>
          <p className="mt-6 text-lg text-black/75 leading-relaxed">
            Un premier échange permet souvent d’identifier rapidement où agir en priorité.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
              style={{ background: BRAND.orange }}
            >
              Faire le point
            </a>
            <a
              href="/offres"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition hover:bg-[#F7F7F7]"
              style={{ borderColor: BRAND.black, color: BRAND.black }}
            >
              Voir les offres
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}