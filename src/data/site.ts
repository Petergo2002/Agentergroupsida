export const SITE_URL = "https://agentergroup.com";
export const SITE_NAME = "AgenterGroup";
export const DASHBOARD_LOGIN_URL = "https://dashboard.agentergroup.com/login";
export const DASHBOARD_SIGNUP_URL = "https://dashboard.agentergroup.com/signup";

export const SITE_CONTENT = {
  en: {
    description: "AgenterGroup is a SaaS platform where companies create, train, and launch their own AI agents for support, leads, and meeting booking.",
    primaryCta: "Talk to AI directly",
    login: "Login",
    demo: "Demo",
    pagesTitle: "Pages",
    aiWidgetLabel: "Talk to our AI",
    footer: {
      whoWeAre: "Who are we?",
      description: "A SaaS platform for creating AI agents that answer visitors, qualify leads, and automate customer conversations directly from your website.",
      contactUs: "Contact Us",
      explorePlatform: "Explore the Platform",
      locationTitle: "Location",
      address: "Borås, Sweden"
    }
  },
  sv: {
    description: "AgenterGroup är en SaaS-plattform där företag enkelt skapar, tränar och lanserar sin egen AI agent för kundtjänst, leads och bokning.",
    primaryCta: "Prata med AI direkt",
    login: "Logga in",
    demo: "Demo",
    pagesTitle: "Sidor",
    aiWidgetLabel: "Prata med vår AI",
    footer: {
      whoWeAre: "Vilka är vi?",
      description: "En SaaS-plattform där företag skapar AI-agenter som svarar besökare, kvalificerar leads och automatiserar kunddialoger direkt från hemsidan.",
      contactUs: "Kontakta Oss",
      explorePlatform: "Utforska Plattformen",
      locationTitle: "Location",
      address: "Borås, Sverige"
    }
  }
} as const;

export const SITE_DESCRIPTION = SITE_CONTENT.en.description;
export const PRIMARY_CTA_LABEL = SITE_CONTENT.en.primaryCta;

export const getNavLinks = (lang: 'en' | 'sv' = 'en') => {
  const isSv = lang === 'sv';
  const prefix = isSv ? '/sv' : '';

  return {
    primary: [
      { href: `${prefix}/`, label: isSv ? "Hem" : "Home" },
      { href: "/sv/blogg", label: isSv ? "Blogg" : "Blog" },
      { href: "/sv/hemsida-med-ai-chatbot", label: isSv ? "Hemsida" : "Website" },
    ],
    pages: [],
    footer: [
      { href: `${prefix}/`, label: isSv ? "Hem" : "Home" },
      { href: "/sv/blogg", label: isSv ? "Blogg" : "Blog" },
      { href: "/sv/hemsida-med-ai-chatbot", label: isSv ? "AI agent på hemsidan" : "Website AI Agent" },
    ]
  };
};

// Legacy exports for backward compatibility during migration
export const primaryNavLinks = getNavLinks('sv').primary;
export const pageNavLinks = getNavLinks('sv').pages;
export const mainNavLinks = getNavLinks('sv').pages;
export const footerNavLinks = getNavLinks('sv').footer;

export const serviceLinkCards = [
  {
    href: "/sv/ai-chatbot-foretag",
    title: "AI agent på hemsidan",
    description:
      "Skapa en AI agent som svarar på frågor, fångar leads och hjälper besökare vidare direkt på webbplatsen.",
  },
  {
    href: "/sv/ai-kundtjanst",
    title: "AI-kundtjänst",
    description:
      "Automatisera kundtjänst och support med en AI-agent som hanterar vanliga frågor och eskalerar rätt ärenden.",
  },
  {
    href: "/sv/ai-agent-foretag",
    title: "AI agent för företag",
    description:
      "Bygg AI-agenter i plattformen och koppla ihop dialog, CRM, kalender, kunskapsbas och interna arbetsflöden.",
  },
  {
    href: "/sv/hemsida-med-ai-chatbot",
    title: "AI agent för hemsidan",
    description:
      "Installera en AI agent på hemsidan och låt erbjudande, lead capture och bokningsflöde arbeta tillsammans.",
  },
] as const;

export const sitemapPaths = [
  "/",
  "/sv/",
  "/sv/ai-chatbot-foretag",
  "/sv/ai-kundtjanst",
  "/sv/ai-agent-foretag",
  "/sv/hemsida-med-ai-chatbot",
  "/sv/blogg",
  "/privacy",
  "/terms",
] as const;
