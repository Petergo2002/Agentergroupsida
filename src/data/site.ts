export const SITE_URL = "https://agentergroup.com";
export const SITE_NAME = "AgenterGroup";
export const DASHBOARD_LOGIN_URL = "https://dashboard.agentergroup.com/login";

export const SITE_CONTENT = {
  en: {
    description: "We build AI agents and AI chatbots for companies in customer service, lead qualification, and meeting booking.",
    primaryCta: "Talk to AI directly",
    login: "Login",
    demo: "Demo",
    pagesTitle: "Pages",
    aiWidgetLabel: "Talk to our AI",
    footer: {
      whoWeAre: "Who are we?",
      description: "We build intelligent AI systems that automate customer conversations, lead management, and meeting bookings. We redefine how modern companies operate in the digital era.",
      contactUs: "Contact Us",
      explorePlatform: "Explore the Platform",
      locationTitle: "Location",
      address: "Borås, Sweden"
    }
  },
  sv: {
    description: "Vi bygger AI-agenter och AI-chatbots för svenska företag inom kundservice, leadkvalificering och mötesbokning.",
    primaryCta: "Prata med AI direkt",
    login: "Logga in",
    demo: "Demo",
    pagesTitle: "Sidor",
    aiWidgetLabel: "Prata med vår AI",
    footer: {
      whoWeAre: "Vilka är vi?",
      description: "Vi bygger intelligenta AI-system som automatiserar kundkonversationer, leadhantering och mötesbokning. Vi omdefinierar hur moderna företag opererar i den digitala eran.",
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
      { href: isSv ? "/sv/blogg" : "/blog", label: isSv ? "Blogg" : "Blog" },
      { href: isSv ? "/sv/hemsida-med-ai-chatbot" : "/websites-with-ai-chatbot", label: isSv ? "Hemsida" : "Website" },
    ],
    pages: [],
    footer: [
      { href: `${prefix}/`, label: isSv ? "Hem" : "Home" },
      { href: isSv ? "/sv/blogg" : "/blog", label: isSv ? "Blogg" : "Blog" },
      { href: isSv ? "/sv/hemsida-med-ai-chatbot" : "/websites-with-ai-chatbot", label: isSv ? "Hemsida med AI chatbot" : "Website with AI Chatbot" },
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
    href: "/sv/hemsida-med-ai-chatbot",
    title: "Hemsida med AI chatbot",
    description:
      "En säljande hemsida där erbjudande, AI-chatt, lead capture och bokningsflöde arbetar tillsammans.",
  },
] as const;

export const sitemapPaths = [
  "/",
  "/sv/",
  "/websites-with-ai-chatbot",
  "/sv/hemsida-med-ai-chatbot",
  "/blog",
  "/sv/blogg",
] as const;
