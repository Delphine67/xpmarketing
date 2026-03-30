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

export default function MethodePage() {
  const steps = [
    {
      n: "01",
      title: "Diagnostic",
      text: "Nous faisons d’abord le point sur votre situation : votre activité, vos enjeux, vos supports, votre organisation actuelle et vos objectifs.",
      result: "Vous obtenez une lecture plus claire de votre situation.",
      bg: "#FCE8DD",
      color: "#000000",
    },
    {
      n: "02",
      title: "Priorisation",
      text: "Nous identifions ce qui mérite d’être traité en premier, pour éviter la dispersion et concentrer les efforts sur l’essentiel.",
      result: "Vous savez où agir et dans quel ordre.",
      bg: "#ED6924",
      color: "#FFFFFF",
    },
    {
      n: "03",
      title: "Plan d’actions",
      text: "Je construis avec vous une feuille de route réaliste, cohérente et adaptée à votre entreprise, à vos moyens et à votre rythme.",
      result: "Vous disposez d’un cadre clair pour avancer.",
      bg: "#2C5C7A",
      color: "#FFFFFF",
    },
    {
      n: "04",
      title: "Mise en œuvre et suivi",
      text: "Nous passons à l’action, avec un accompagnement concret, des ajustements et un suivi des résultats dans la durée.",
      result: "Vous avancez de façon plus régulière et plus pilotée.",
      bg: "#000000",
      color: "#FFFFFF",
    },
  ];

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-16 md:py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Méthode</SectionTag>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Une méthode simple pour faire avancer votre marketing
          </h1>

          <p className="mt-6 text-lg text-black/80 max-w-3xl leading-relaxed">
            Mon approche est volontairement simple : comprendre, prioriser, structurer,
            agir et suivre. L’objectif n’est pas de produire de la théorie, mais
            de vous aider à avancer concrètement.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-3xl p-8 md:p-10"
              style={{ background: step.bg, color: step.color }}
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                <div className="text-4xl md:text-5xl font-bold opacity-90">{step.n}</div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                  <p className="mt-5 leading-relaxed text-base md:text-lg opacity-90">
                    {step.text}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/15 px-5 py-4">
                    <p className="font-semibold">Ce que cela vous apporte</p>
                    <p className="mt-2 opacity-90">{step.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>En pratique</SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Une méthode adaptée aux PME
          </h2>
          <p className="mt-6 text-lg text-black/80 leading-relaxed">
            Cette méthode est pensée pour les entreprises qui veulent avancer avec
            clarté, sans perdre de temps, avec un accompagnement utile et réaliste.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="/offres"
              className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
              style={{ background: BRAND.orange }}
            >
              Voir les offres
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition hover:bg-white"
              style={{ borderColor: BRAND.black, color: BRAND.black }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}