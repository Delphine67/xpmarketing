"use client";

import Image from "next/image";
import { useState } from "react";

const BRAND = {
  orange: "#ED6924",
  black: "#000000",
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo-xpmarketing.png"
            alt="XPMarketing"
            width={52}
            height={52}
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-black text-lg leading-none">XPMarketing</div>
            <div className="text-xs text-black/60">Marketing externalisé pour PME</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black">
          <a href="/" className="hover:text-[#ED6924] transition">Accueil</a>
          <a href="/expertise" className="hover:text-[#ED6924] transition">Expertise</a>
          <a href="/methode" className="hover:text-[#ED6924] transition">Méthode</a>
          <a href="/offres" className="hover:text-[#ED6924] transition">Offres</a>
          <a href="/blog" className="hover:text-[#ED6924] transition">Blog</a>
          <a href="/contact" className="hover:text-[#ED6924] transition">Contact</a>
        </nav>

        <div className="hidden lg:flex">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl px-5 py-3 text-white font-semibold transition hover:opacity-95"
            style={{ background: BRAND.orange }}
          >
            Faire le point
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-black/15 px-3 py-2 text-black"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm font-medium text-black">
            <a href="/" onClick={() => setOpen(false)}>Accueil</a>
            <a href="/expertise" onClick={() => setOpen(false)}>Expertise</a>
            <a href="/methode" onClick={() => setOpen(false)}>Méthode</a>
            <a href="/offres" onClick={() => setOpen(false)}>Offres</a>
            <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="/contact" onClick={() => setOpen(false)}>Contact</a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white font-semibold"
              style={{ background: BRAND.orange }}
            >
              Faire le point
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}