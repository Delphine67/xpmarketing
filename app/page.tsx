import Image from "next/image";

const BRAND = {
  orange: "#ED6924",
  blueGray: "#2C5C7A",
  lightGray: "#DBDBDB",
  storm: "#5B5957",
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
    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
      {children}
    </h2>
  );
}

function IconCircle({
  children,
  bg = BRAND.orange,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const situations = [
    "Vous gérez le marketing quand vous pouvez, entre deux urgences.",
    "Vos actions manquent de cohérence et de régularité.",
    "Vous investissez sans toujours savoir ce qui fonctionne vraiment.",
    "Vous hésitez à recruter, mais vous avez besoin d’avancer.",
  ];

  const gains = [
    {
      icon: "↗",
      title: "Structurer votre stratégie",
      text: "Clarifier vos priorités et concentrer vos efforts sur ce qui fait réellement avancer votre activité.",
    },
    {
      icon: "◎",
      title: "Développer votre visibilité",
      text: "Renforcer votre présence, votre lisibilité et votre capacité à être identifié par les bons interlocuteurs.",
    },
    {
      icon: "€",
      title: "Accélérer votre développement",
      text: "Mettre en place des actions concrètes qui soutiennent vos objectifs commerciaux.",
    },
    {
      icon: "✓",
      title: "Optimiser votre budget",
      text: "Investir au bon endroit, avec une logique simple, mesurable et adaptée à votre taille d’entreprise.",
    },
  ];

  const offers = [
    {
      title: "Mission ponctuelle",
      subtitle: "Pour répondre à un besoin précis",
      text: "Audit marketing, clarification d’offre, relecture d’une situation ou définition d’un plan d’action ciblé.",
      tag: "Ciblé",
    },
    {
      title: "Projet structurant",
      subtitle: "Pour passer un cap",
      text: "Structuration de votre démarche marketing, refonte de supports, organisation commerciale ou visibilité.",
      tag: "Projet",
    },
    {
      title: "Marketing externalisé",
      subtitle: "Pour avancer dans la durée",
      text: "Un responsable marketing externalisé à vos côtés, sans les contraintes d’un recrutement interne.",
      tag: "Récurrent",
    },
  ];

  const mobileSteps = [
    {
      n: "1",
      title: "Diagnostic",
      text: "Analyse rapide de votre situation, de vos enjeux et de vos actions actuelles.",
      bg: "#FCE8DD",
      color: "#000000",
    },
    {
      n: "2",
      title: "Priorisation",
      text: "Identification des actions utiles et hiérarchisation de vos priorités.",
      bg: "#ED6924",
      color: "#FFFFFF",
    },
    {
      n: "3",
      title: "Plan d’actions",
      text: "Construction d’une feuille de route claire, réaliste et adaptée à votre entreprise.",
      bg: "#2C5C7A",
      color: "#FFFFFF",
    },
    {
      n: "4",
      title: "Mise en œuvre",
      text: "Déploiement, ajustements et suivi des résultats dans la durée.",
      bg: "#000000",
      color: "#FFFFFF",
    },
  ];

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section
        className="px-6 py-16 md:py-24 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${BRAND.lightGray} 0%, #f4f4f4 100%)` }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="relative z-10">
            <SectionTag>Marketing externalisé pour PME</SectionTag>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-black">
              Le marketing qui fait avancer
              <br />
              votre entreprise,
              <span style={{ color: BRAND.orange }}> concrètement</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-black/80 leading-relaxed max-w-2xl">
              Vous êtes dirigeant de PME et vous avez besoin de structurer votre
              développement, gagner en visibilité et obtenir des résultats ?
            </p>

            <p className="mt-4 text-base md:text-lg text-black/70 leading-relaxed max-w-2xl">
              J’interviens comme <strong>marketing externalisé</strong> pour vous
              aider à clarifier vos priorités, mettre en place des actions utiles
              et transformer vos objectifs en résultats concrets.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
                style={{ background: BRAND.orange }}
              >
                Faire le point
              </a>

              <a
                href="/offres"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition hover:bg-white"
                style={{ borderColor: BRAND.black, color: BRAND.black }}
              >
                Voir les offres
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["PME industrie", "Services B2B", "Actions concrètes"].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 border bg-white/70"
                  style={{ borderColor: "rgba(0,0,0,0.15)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <div
              className="absolute -top-4 -left-4 w-[85%] h-[90%] rotate-[-6deg]"
              style={{ background: BRAND.black }}
            />
            <div
              className="absolute top-0 left-8 w-[88%] h-[92%] overflow-hidden shadow-2xl"
              style={{ background: BRAND.orange }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/hero-xpmarketing.jpg"
                  alt="Marketing externalisé pour PME"
                  fill sizes="100vw"
  priority
                  className="object-cover opacity-90 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>

            <div className="absolute bottom-4 right-0 bg-white shadow-xl rounded-2xl p-5 max-w-xs border border-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C5C7A]">
                Votre objectif
              </p>
              <p className="mt-3 text-lg font-bold leading-snug">
                Structurer votre marketing
                <br />
                sans recruter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATION */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Vous êtes dans cette situation ?</SectionTag>
          <SectionTitle>
            Vous avez du potentiel, mais votre marketing n’est pas encore structuré
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {situations.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                  background: "#ffffff",
                }}
              >
                <div className="flex items-start gap-4">
                  <IconCircle bg={BRAND.blueGray}>!</IconCircle>
                  <p className="text-lg leading-relaxed text-black/80 transition-colors duration-300 group-hover:text-black">
                    {item}
                  </p>
                </div>
                <div
                  className="mt-6 h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ background: BRAND.orange }}
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-black/75 max-w-3xl leading-relaxed">
            Résultat : des efforts réels, mais une croissance difficile à piloter
            et une visibilité insuffisante sur ce qui fonctionne vraiment.
          </p>
        </div>
      </section>

      {/* GAINS */}
      <section className="px-6 py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Ce que je vous apporte</SectionTag>
          <SectionTitle>Une solution claire : structurer, prioriser, agir</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {gains.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-8 border border-black/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <IconCircle>{item.icon}</IconCircle>
                  <div>
                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#ED6924]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-black/75 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Des formats adaptés à votre réalité</SectionTag>
          <SectionTitle>Des solutions souples, selon votre besoin</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <IconCircle>•</IconCircle>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{ background: BRAND.orangeSoft, color: BRAND.orange }}
                  >
                    {offer.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold transition-colors duration-300 group-hover:text-[#ED6924]">
                  {offer.title}
                </h3>

                <p className="mt-3 text-base font-medium text-[#2C5C7A]">
                  {offer.subtitle}
                </p>

                <p className="mt-5 text-black/75 leading-relaxed">{offer.text}</p>

                <a
                  href="/offres"
                  className="mt-8 inline-flex font-semibold transition-colors duration-300 group-hover:text-[#ED6924]"
                >
                  En savoir plus →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE DESKTOP FLÈCHE */}
      <section className="px-6 py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Une méthode en 4 étapes</SectionTag>
          <SectionTitle>Une progression simple, visible et pilotable</SectionTitle>

          <div className="hidden lg:grid grid-cols-4 gap-0 mt-14">
            <div
              className="relative px-8 py-10 text-black"
              style={{
                background: BRAND.orangeSoft,
                clipPath: "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%, 12% 50%)",
              }}
            >
              <div className="pl-6">
                <div className="text-[#ED6924] text-sm font-semibold uppercase tracking-[0.2em]">
                  01
                </div>
                <h3 className="mt-3 text-2xl font-bold">Diagnostic</h3>
                <p className="mt-4 text-black/75 leading-relaxed">
                  Analyse rapide de votre situation, de vos enjeux et de vos actions actuelles.
                </p>
              </div>
            </div>

            <div
              className="relative px-8 py-10 text-white"
              style={{
                background: BRAND.orange,
                clipPath: "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%, 12% 50%)",
                marginLeft: "-26px",
              }}
            >
              <div className="pl-6">
                <div className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">
                  02
                </div>
                <h3 className="mt-3 text-2xl font-bold">Priorisation</h3>
                <p className="mt-4 text-white/85 leading-relaxed">
                  Identification des actions utiles et hiérarchisation claire de vos priorités.
                </p>
              </div>
            </div>

            <div
              className="relative px-8 py-10 text-white"
              style={{
                background: BRAND.blueGray,
                clipPath: "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%, 12% 50%)",
                marginLeft: "-26px",
              }}
            >
              <div className="pl-6">
                <div className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">
                  03
                </div>
                <h3 className="mt-3 text-2xl font-bold">Plan d’actions</h3>
                <p className="mt-4 text-white/85 leading-relaxed">
                  Construction d’une feuille de route réaliste et adaptée à votre entreprise.
                </p>
              </div>
            </div>

            <div
              className="relative px-8 py-10 text-white"
              style={{
                background: BRAND.black,
                clipPath: "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%, 12% 50%)",
                marginLeft: "-26px",
              }}
            >
              <div className="pl-6">
                <div className="text-white/70 text-sm font-semibold uppercase tracking-[0.2em]">
                  04
                </div>
                <h3 className="mt-3 text-2xl font-bold">Mise en œuvre</h3>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Déploiement, ajustements et suivi des résultats dans la durée.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden mt-12 grid gap-6">
            {mobileSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl p-8"
                style={{ background: step.bg, color: step.color }}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {step.n}
                </div>
                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed opacity-85">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div
            className="rounded-3xl p-10 text-white"
            style={{ background: BRAND.black }}
          >
            <SectionTag>Pourquoi me choisir</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              30 ans d’expérience
              <br />
              au service du marketing
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Une approche personnalisée",
              "Une expertise reconnue",
              "Une garantie de réactivité",
              "Un accompagnement souple et adaptable",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 p-6 bg-[#F7F7F7]"
              >
                <div className="flex items-center gap-4">
                  <IconCircle bg={BRAND.orange}>+</IconCircle>
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-6 py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Blog & conseils</SectionTag>
          <SectionTitle>Des conseils pratiques pour les PME</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Comment structurer son marketing quand on est une PME",
              "Par où commencer quand on manque de temps",
              "Les erreurs fréquentes qui freinent le développement",
            ].map((item) => (
              <article
                key={item}
                className="rounded-2xl bg-white border border-black/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold leading-snug">{item}</h3>
                <p className="mt-4 text-black/70 leading-relaxed">
                  Un article clair, pratique et directement utile pour votre activité.
                </p>
                <a href="/blog" className="mt-6 inline-flex font-semibold text-[#ED6924]">
                  Lire l’article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-white" style={{ background: BRAND.black }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Passons à l’action</SectionTag>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Parlons de votre développement
          </h2>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Un premier échange permet souvent d’identifier rapidement les actions
            les plus utiles pour votre entreprise.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
              style={{ background: BRAND.orange }}
            >
              Prendre rendez-vous
            </a>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border border-white transition hover:bg-white hover:text-black"
            >
              Envoyer un message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}