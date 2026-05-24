import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL, sitemapPaths } from "../data/site";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const today = new Date().toISOString().split("T")[0];
  const priorityByPath = new Map([
    ["/sv/", "1.0"],
    ["/", "0.8"],
    ["/sv/ai-chatbot-foretag", "0.95"],
    ["/sv/ai-kundtjanst", "0.9"],
    ["/sv/ai-agent-foretag", "0.9"],
    ["/sv/hemsida-med-ai-chatbot", "0.9"],
    ["/sv/blogg", "0.7"],
  ]);

  const staticUrls = sitemapPaths.map((path) => {
    const changefreq = path.includes("privacy") || path.includes("terms") ? "yearly" : "monthly";
    const priority = priorityByPath.get(path) ?? "0.4";

    return `<url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  });

  const blogUrls = posts.map(
    (post) => {
      const lastmod = (post.data.updatedDate ?? post.data.pubDate).toISOString().split("T")[0];

      return `<url><loc>${SITE_URL}/sv/blogg/${post.id}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.65</priority></url>`;
    }
  );

  const urls = [...staticUrls, ...blogUrls].join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
