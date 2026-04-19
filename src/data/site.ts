export const SITE_URL = "https://agentergroup.com";
export const SITE_NAME = "AgenterGroup";

export const SITE_CONTENT = {
  en: {
    description: "We build AI agents and AI chatbots for companies in customer service, lead qualification, and meeting booking.",
    primaryCta: "Talk to AI directly",
    bookMeeting: "Book meeting",
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
    bookMeeting: "Boka möte",
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

export const getNavLinks = (lang: 'en' | 'sv') => {
  const isSv = lang === 'sv';
  const prefix = isSv ? '/sv' : '';
  
  return {
    primary: [
      { href: `${prefix}/`, label: isSv ? "Hem" : "Home" },
      { href: `/blog`, label: "Blog" },
    ],
    pages: [
      { href: `${prefix}${isSv ? "/ai-chatbot-for-foretag" : "/ai-chatbot-for-business"}`, label: isSv ? "AI chatbot för företag" : "AI Chatbot for Business" },
      { href: `${prefix}${isSv ? "/ai-agent-kundservice" : "/ai-customer-service-agent"}`, label: isSv ? "AI agent kundservice" : "AI Customer Service Agent" },
      { href: `${prefix}${isSv ? "/ai-leadkvalificering" : "/ai-lead-qualification"}`, label: isSv ? "AI leadkvalificering" : "AI Lead Qualification" },
      { href: `${prefix}${isSv ? "/ai-motesbokning" : "/ai-meeting-booking"}`, label: isSv ? "AI mötesbokning" : "AI Meeting Booking" },
      { href: `${prefix}${isSv ? "/integrationer" : "/integrations"}`, label: isSv ? "Integrationer" : "Integrations" },
      { href: `${prefix}${isSv ? "/sa-fungerar-det" : "/how-it-works"}`, label: isSv ? "Så fungerar det" : "How it works" },
    ],
    footer: [
      { href: `${prefix}${isSv ? "/ai-chatbot-for-foretag" : "/ai-chatbot-for-business"}`, label: isSv ? "AI chatbot för företag" : "AI Chatbot for Business" },
      { href: `${prefix}${isSv ? "/ai-agent-kundservice" : "/ai-customer-service-agent"}`, label: isSv ? "AI agent kundservice" : "AI Customer Service Agent" },
      { href: `${prefix}${isSv ? "/ai-leadkvalificering" : "/ai-lead-qualification"}`, label: isSv ? "AI leadkvalificering" : "AI Lead Qualification" },
      { href: `${prefix}${isSv ? "/ai-motesbokning" : "/ai-meeting-booking"}`, label: isSv ? "AI mötesbokning" : "AI Meeting Booking" },
      { href: `${prefix}${isSv ? "/integrationer" : "/integrations"}`, label: isSv ? "Integrationer" : "Integrations" },
      { href: `${prefix}${isSv ? "/sa-fungerar-det" : "/how-it-works"}`, label: isSv ? "Så fungerar det" : "How it works" },
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
    href: "/ai-chatbot-for-foretag",
    title: "AI chatbot för företag",
    description:
      "För företag som vill automatisera första kontakten, svara snabbare och ta fler kvalificerade dialoger.",
  },
  {
    href: "/ai-agent-kundservice",
    title: "AI agent för kundservice",
    description:
      "Hantera vanliga frågor, avlasta supporten och ge svar dygnet runt på svenska.",
  },
  {
    href: "/ai-leadkvalificering",
    title: "AI för leadkvalificering",
    description:
      "Filtrera leads, samla rätt data och skicka rätt affär till rätt person direkt.",
  },
  {
    href: "/ai-motesbokning",
    title: "AI för mötesbokning",
    description:
      "Låt agenten boka möten i kalendern utan manuell uppföljning och onödig friktion.",
  },
  {
    href: "/integrationer",
    title: "Integrationer",
    description:
      "Koppla agenten till CRM, kalender, inbox och interna system så att den kan göra jobbet på riktigt.",
  },
  {
    href: "/sa-fungerar-det",
    title: "Så fungerar det",
    description:
      "Se hur vi bygger, tränar och implementerar agenten åt er steg för steg.",
  },
] as const;

export const sitemapPaths = [
  "/",
  "/sv/",
  "/ai-chatbot-for-business",
  "/sv/ai-chatbot-for-foretag",
  "/ai-customer-service-agent",
  "/sv/ai-agent-kundservice",
  "/ai-lead-qualification",
  "/sv/ai-leadkvalificering",
  "/ai-meeting-booking",
  "/sv/ai-motesbokning",
  "/integrations",
  "/sv/integrationer",
  "/how-it-works",
  "/sv/sa-fungerar-det",
  "/blog",
] as const;
