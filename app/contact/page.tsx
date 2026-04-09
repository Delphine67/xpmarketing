"use client";

import { useState } from "react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const chipStyle =
    "border px-3 py-1.5 rounded-full text-sm cursor-pointer transition";
  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-black outline-none";

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        window.location.href = "/merci";
        return;
      }

      setErrorMessage("L’envoi a échoué. Merci de réessayer.");
    } catch {
      setErrorMessage("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white" style={{ color: BRAND.text }}>
      {/* HERO */}
      <section className="px-6 py-12" style={{ background: BRAND.grayBg }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Parlons de votre situation</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Vous avez besoin d’un regard extérieur, d’un appui ponctuel ou d’un
            marketing externalisé ? Décrivez votre besoin et je reviens vers vous
            rapidement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border p-8 shadow-sm"
            >
              <input type="hidden" name="_subject" value="Contact XPMarketing" />
              <input type="text" name="_gotcha" className="hidden" />

              {/* INPUTS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label>Nom et prénom *</label>
                  <input
                    name="nom"
                    required
                    className={inputStyle}
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label>Entreprise *</label>
                  <input
                    name="entreprise"
                    required
                    className={inputStyle}
                    placeholder="Nom de l’entreprise"
                  />
                </div>

                <div>
                  <label>Ville *</label>
                  <input
                    name="ville"
                    required
                    className={inputStyle}
                    placeholder="Ex : Nanterre"
                  />
                </div>

                <div>
                  <label>Code postal *</label>
                  <input
                    name="code_postal"
                    required
                    className={inputStyle}
                    placeholder="Ex : 92000"
                  />
                </div>

                <div>
                  <label>Taille de l’entreprise *</label>
                  <select
                    name="taille"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="-10">Moins de 10 salariés</option>
                    <option value="10-49">10 à 49 salariés</option>
                    <option value="50-250">50 à 250 salariés</option>
                    <option value="250+">Plus de 250 salariés</option>
                  </select>
                </div>

                <div>
                  <label>Secteur d’activité *</label>
                  <select
                    name="secteur"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="Industrie">Industrie</option>
                    <option value="BTP">BTP</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="Gestion immobilière">Gestion immobilière</option>
                    <option value="Services">Services</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Transport">Transport</option>
                    <option value="Santé">Santé</option>
                    <option value="Finance">Finance</option>
                    <option value="IT / Digital">IT / Digital</option>
                    <option value="Éducation">Éducation</option>
                    <option value="Hôtellerie / Restauration">
                      Hôtellerie / Restauration
                    </option>
                    <option value="Associatif">Associatif</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label>Téléphone</label>
                  <input
                    name="telephone"
                    className={inputStyle}
                    placeholder="06..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={inputStyle}
                    placeholder="vous@entreprise.fr"
                  />
                </div>
              </div>

              {/* BESOIN */}
              <div className="mt-8">
                <label>Votre besoin</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Faire le point",
                    "Structurer votre marketing",
                    "Clarifier votre positionnement",
                    "Développer votre visibilité",
                    "Générer plus de leads",
                    "Communication digitale",
                    "Communication print",
                    "Marketing externalisé",
                    "Mission ponctuelle",
                    "Mission projet",
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="checkbox"
                        name="besoin[]"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-orange-500 peer-checked:text-white`}
                      >
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
                    "À définir ensemble",
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="radio"
                        name="format"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-orange-500 peer-checked:text-white`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-8">
                <label>Message *</label>
                <textarea
                  name="message"
                  required
                  className={`${inputStyle} min-h-[150px]`}
                  placeholder="Contexte, objectifs, problématique, échéance…"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl text-white font-semibold disabled:opacity-60"
                  style={{ background: BRAND.orange }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande →"}
                </button>

                <p className="text-xs text-slate-500">
                  Votre demande me sera transmise directement par email.
                </p>
              </div>

              {errorMessage && (
                <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
              )}
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Zone d’intervention</h3>
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

              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-center px-4 py-3 rounded-xl text-white"
                style={{ background: BRAND.orange }}
              >
                Prendre rendez-vous
              </a>

              <a
                href={`mailto:${mailTo}`}
                className="mt-3 block text-center px-4 py-3 border rounded-xl"
                style={{ color: BRAND.orange, borderColor: BRAND.orange }}
              >
                Envoyer un e-mail
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}