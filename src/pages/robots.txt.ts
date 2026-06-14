import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://buildingabrandonline.com/sitemap.xml\n`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
};
