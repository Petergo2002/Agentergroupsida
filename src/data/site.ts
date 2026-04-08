export const SITE_URL = "https://agentergroup.com";
export const SITE_NAME = "AgenterGroup";
export const SITE_DESCRIPTION =
  "Vi bygger AI-agenter och AI-chatbots för svenska företag inom kundservice, leadkvalificering och mötesbokning.";

export const PRIMARY_CTA_LABEL = "Prata med AI direkt";

export const primaryNavLinks = [
  { href: "/", label: "Hem" },
  { href: "/#om-oss", label: "Om oss" },
] as const;

export const pageNavLinks = [
  { href: "/ai-chatbot-for-foretag", label: "AI chatbot för företag" },
  { href: "/ai-agent-kundservice", label: "AI agent kundservice" },
  { href: "/ai-leadkvalificering", label: "AI leadkvalificering" },
  { href: "/ai-motesbokning", label: "AI mötesbokning" },
  { href: "/integrationer", label: "Integrationer" },
  { href: "/sa-fungerar-det", label: "Så fungerar det" },
] as const;

export const mainNavLinks = [
  { href: "/", label: "Hem" },
  { href: "/ai-chatbot-for-foretag", label: "AI Chatbot" },
  { href: "/integrationer", label: "Integrationer" },
  { href: "/sa-fungerar-det", label: "Så fungerar det" },
] as const;

export const footerNavLinks = [
  { href: "/ai-chatbot-for-foretag", label: "AI chatbot för företag" },
  { href: "/ai-agent-kundservice", label: "AI agent kundservice" },
  { href: "/ai-leadkvalificering", label: "AI leadkvalificering" },
  { href: "/ai-motesbokning", label: "AI mötesbokning" },
  { href: "/integrationer", label: "Integrationer" },
  { href: "/sa-fungerar-det", label: "Så fungerar det" },
] as const;

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
  "/ai-chatbot-for-foretag",
  "/ai-agent-kundservice",
  "/ai-leadkvalificering",
  "/ai-motesbokning",
  "/integrationer",
  "/sa-fungerar-det",
] as const;
