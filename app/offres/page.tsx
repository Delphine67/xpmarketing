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
    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
      {children}
    </h2>
  );
}

function OfferCard({
  badge,
  title,
  subtitle,
  children,
  featured = false,
}: {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        borderColor: featured ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
          style={{
            background: featured ? "rgba(255,255,255,0.12)" : BRAND.orangeSoft,
            color: featured ? "#ffffff" : BRAND.orange,
          }}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold">{title}</h3>
      <p
        className="mt-3 text-base font-medium"
        style={{ color: featured ? "rgba(255,255,255,0.82)" : BRAND.blueGray }}
      >
        {subtitle}
      </p>

      <div
        className="mt-6 space-y-4 leading-relaxed"
        style={{ color: featured ? "rgba(255,255,255,0.86)" : "rgba(0,0,0,0.75)" }}
      >
        {children}
      </div>
    </article>
  );
}

export default function OffresPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-16 md:py-20" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Offres</SectionTag>
          <SectionTitle>Des solutions marketing adaptées à votre entreprise</SectionTitle>

          <p className="mt-6 text-lg text-black/80 max-w-3xl leading-relaxed">
            Vous avez besoin d’un regard extérieur, d’un projet structurant ou
            d’un marketing externalisé dans la durée ? Je vous propose des
            formats souples, concrets et adaptés aux réalités des PME.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
              style={{ background: BRAND.orange }}
            >
              Faire le point sur votre besoin
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

      {/* AIDE AU CHOIX */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Quelle formule choisir ?</SectionTag>
          <SectionTitle>Un format différent selon votre situation</SectionTitle>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Vous avez un besoin précis",
                text: "Nous commençons par un diagnostic ou une mission ponctuelle ciblée.",
              },
              {
                title: "Vous voulez structurer votre développement",
                text: "La mission projet vous donne un cadre clair et un plan d’action réaliste.",
              },
              {
                title: "Vous avez besoin d’un appui régulier",
                text: "Le marketing externalisé vous permet d’avancer sans recruter en interne.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-black/75 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section className="px-6 py-16" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Première étape</SectionTag>
          <SectionTitle>Commencer par un diagnostic</SectionTitle>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <OfferCard
              badge="Gratuit"
              title="Premier diagnostic"
              subtitle="Un premier échange pour faire le point"
            >
              <p>
                Un échange simple pour comprendre votre situation, vos objectifs
                et vos freins actuels.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Analyse rapide de votre contexte</li>
                <li>Identification des priorités les plus visibles</li>
                <li>Orientation vers le bon format d’accompagnement</li>
              </ul>
              <p>
                L’objectif : vous donner un premier éclairage utile, sans engagement.
              </p>
            </OfferCard>

            <OfferCard
              badge="Approfondi"
              title="Diagnostic approfondi"
              subtitle="Pour poser des bases solides avant d’agir"
            >
              <p>
                Une analyse plus poussée de votre marketing, de vos supports, de
                votre visibilité et de votre organisation.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Lecture de votre situation marketing actuelle</li>
                <li>Analyse de l’offre, des messages et des outils existants</li>
                <li>Repérage des points de blocage et des leviers utiles</li>
                <li>Premières recommandations concrètes</li>
              </ul>
              <p>
                C’est la bonne formule pour prendre du recul et repartir avec
                une vision claire.
              </p>
            </OfferCard>
          </div>
        </div>
      </section>

      {/* 3 OFFRES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les 3 offres principales</SectionTag>
          <SectionTitle>Des solutions souples, selon votre besoin</SectionTitle>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <OfferCard
              badge="Ponctuel"
              title="Mission ponctuelle"
              subtitle="Pour répondre à un besoin précis"
            >
              <p>
                Cette formule est adaptée si vous souhaitez débloquer une
                situation, prendre du recul ou traiter un sujet ciblé.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Audit marketing</li>
                <li>Clarification de l’offre</li>
                <li>Relecture de vos supports</li>
                <li>Plan d’action ciblé</li>
                <li>Aide à la décision</li>
              </ul>
              <p>
                Vous obtenez une lecture claire de la situation et des actions
                réellement applicables.
              </p>
            </OfferCard>

            <OfferCard
              badge="Projet"
              title="Mission projet"
              subtitle="Pour structurer un chantier marketing"
            >
              <p>
                Cette formule convient si vous voulez faire avancer un projet
                important avec méthode, cadre et pilotage.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Structuration de votre démarche marketing</li>
                <li>Refonte de supports ou d’outils</li>
                <li>Clarification du positionnement</li>
                <li>Plan de communication</li>
                <li>Accompagnement d’un lancement</li>
              </ul>
              <p>
                Vous bénéficiez d’un plan clair, d’un déroulement par étapes et
                de livrables concrets.
              </p>
            </OfferCard>

            <OfferCard
              badge="Récurrent"
              title="Marketing externalisé"
              subtitle="Pour avancer dans la durée sans recruter"
              featured
            >
              <p>
                J’interviens comme votre <strong>responsable marketing externalisé</strong>,
                avec une présence régulière adaptée à vos besoins.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Priorisation des actions</li>
                <li>Organisation du marketing</li>
                <li>Suivi des projets et prestataires</li>
                <li>Appui aux décisions marketing</li>
                <li>Mesure et suivi des résultats</li>
              </ul>
              <p>
                C’est la solution idéale pour les PME qui veulent avancer sans
                créer un poste en interne.
              </p>
            </OfferCard>
          </div>
        </div>
      </section>

      {/* INCLUS */}
      <section className="px-6 py-16" style={{ background: BRAND.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Dans tous les cas</SectionTag>
          <SectionTitle>Ce que vous retrouvez dans chaque accompagnement</SectionTitle>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              "Une approche adaptée à votre entreprise",
              "Des échanges simples et directs",
              "Un langage concret, sans jargon inutile",
              "Des actions réellement applicables",
              "Une logique orientée résultats",
              "Une relation directe avec moi",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white border border-black/10 p-6 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMARRAGE */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Comment on démarre</SectionTag>
          <SectionTitle>Une collaboration simple, étape par étape</SectionTitle>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              "Premier échange sur votre situation",
              "Cadrage du besoin",
              "Proposition adaptée",
              "Lancement de la mission",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 p-7 bg-[#F7F7F7]"
              >
                <div className="text-[#ED6924] text-3xl font-bold">{index + 1}</div>
                <p className="mt-4 text-black/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg text-black/75 max-w-3xl leading-relaxed">
            L’objectif est simple : vous orienter vers la formule la plus utile
            pour votre entreprise, pas vers la plus lourde.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-white" style={{ background: BRAND.black }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Besoin d’y voir plus clair ?</SectionTag>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Vous ne savez pas encore quelle formule choisir ?
          </h2>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            C’est normal. Un premier échange permet souvent de clarifier
            rapidement le besoin et d’identifier la solution la plus pertinente.
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
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border border-white transition hover:bg-white hover:text-black"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}