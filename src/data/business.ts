/**
 * Public identity and contact details for the project owner.
 * Keep fictional clinical content in site.ts so it remains easy to replace separately.
 */
export const businessConfig = {
  name: "TheoWeb Healthcare Demo",
  presentation: "Projet portfolio — démonstration réaliste d'une expérience de santé numérique.",
  tagline: "Une expérience patient moderne, pensée pour le numérique.",
  description:
    "Un projet portfolio qui illustre un site de santé moderne avec prise de rendez-vous, suivi patient et assistance numérique.",
  contact: {
    email: "louisjustetheodore@gmail.com",
    phone: "+509 4634 4841",
    phoneHref: "tel:+50946344841",
    whatsappHref: "https://wa.me/50946344841",
  },
  siteUrl: undefined,
  address: undefined,
  socialLinks: {},
} as const;

export const mockDataNotice =
  "Démonstration portfolio : les services, professionnels, tarifs, créneaux, patients et résultats affichés sont fictifs.";
