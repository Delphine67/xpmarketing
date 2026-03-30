export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Mentions légales</h1>

      <section className="space-y-6 text-black/80 leading-relaxed">

        <div>
          <h2 className="font-semibold">Éditeur du site</h2>
          <p>
            Delphine Ravet<br />
            Micro-entreprise<br />
            SIRET : 89389420400013<br />
            Email : delphine@xpmarketing.fr
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Responsable de publication</h2>
          <p>Delphine Ravet</p>
        </div>

        <div>
          <h2 className="font-semibold">Hébergement</h2>
          <p>
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus du site (textes, images, structure)
            est la propriété exclusive de Delphine Ravet sauf mention contraire.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Responsabilité</h2>
          <p>
            Les informations présentes sur ce site sont fournies à titre indicatif
            et peuvent être modifiées à tout moment.
          </p>
        </div>

      </section>
    </main>
  );
}