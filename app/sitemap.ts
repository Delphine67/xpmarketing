import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xpmarketing.fr",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/expertise",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/methode",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/offres",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/blog",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/contact",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/mentions-legales",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/politique-confidentialite",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/rgpd",
      lastModified: new Date(),
    },
    {
      url: "https://xpmarketing.fr/cookies",
      lastModified: new Date(),
    },
  ];
}