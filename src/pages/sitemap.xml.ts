import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL, sitemapPaths } from "../data/site";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  
  const staticUrls = sitemapPaths.map(
    (path) => `<url><loc>${SITE_URL}${path}</loc></url>`
  );

  const blogUrls = posts.map(
    (post) => `<url><loc>${SITE_URL}/blogg/${post.id}</loc></url>`
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
