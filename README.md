# AgenterGroup Website

Swedish-language marketing site for AgenterGroup, built with Astro 6 and Tailwind CSS 4. The site is structured for SEO and conversion around AI agents, AI chatbots, customer service, lead qualification, meeting booking, and integrations for Swedish companies.

## Stack

- Astro 6 for static rendering and component composition
- Tailwind CSS 4 via `@tailwindcss/vite`
- Plain Astro components with minimal client-side JavaScript

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Project Structure

```text
/
├── docs/
│   ├── PLAN.md
│   └── PROJECT.md
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## Main Pages

- `/`: primary landing page for AgenterGroup
- `/ai-chatbot-for-foretag`: commercial landing page for AI chatbot intent
- `/ai-agent-kundservice`: AI customer service page
- `/ai-leadkvalificering`: lead qualification page
- `/ai-motesbokning`: meeting booking page
- `/integrationer`: integrations page
- `/sa-fungerar-det`: implementation/process page

## SEO Features

- Page-specific titles and meta descriptions
- Canonical URLs
- Open Graph and Twitter metadata
- `Organization` and `WebSite` schema
- Crawlable internal navigation
- `robots.txt` and `sitemap.xml`

## Documentation

- High-level implementation notes: [docs/PROJECT.md](/Users/petergorgees/Dev/agentergrouphemisda/docs/PROJECT.md)
- Project status and next-step roadmap: [docs/PLAN.md](/Users/petergorgees/Dev/agentergrouphemisda/docs/PLAN.md)
