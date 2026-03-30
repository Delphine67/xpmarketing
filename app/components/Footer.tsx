export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* COLONNE 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">XPMarketing</h3>
          <p className="text-white/70 leading-relaxed text-sm">
            Marketing externalisé pour PME.
            <br />
            Une approche concrète pour structurer votre développement
            et obtenir des résultats.
          </p>
        </div>

        {/* COLONNE 2 */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/70 text-sm">
            <a href="/" className="hover:text-white transition">
              Accueil
            </a>
            <a href="/blog" className="hover:text-white transition">
              Blog
            </a>

            <a href="/expertise" className="hover:text-white transition">
              Expertise
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>

            <a href="/methode" className="hover:text-white transition">
              Méthode
            </a>
            <a href="/mentions-legales" className="hover:text-white transition">
              Mentions légales
            </a>

            <a href="/offres" className="hover:text-white transition">
              Offres
            </a>
            <a
              href="/politique-confidentialite"
              className="hover:text-white transition"
            >
              Confidentialité
            </a>

            <a href="/rgpd" className="hover:text-white transition">
              RGPD
            </a>
            <a href="/cookies" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>

        {/* COLONNE 3 */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <a
                href="mailto:delphine@xpmarketing.fr"
                className="hover:text-white transition"
              >
                delphine@xpmarketing.fr
              </a>
            </li>
            <li>
              <a
                href="tel:0770286469"
                className="hover:text-white transition"
              >
                07 70 28 64 69
              </a>
            </li>
            <li>Île-de-France</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} XPMarketing – Delphine Ravet</p>

        <p className="text-center md:text-right">
          Marketing externalisé pour PME
        </p>
      </div>
    </footer>
  );
}