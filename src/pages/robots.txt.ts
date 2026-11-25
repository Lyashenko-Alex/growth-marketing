import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
export const GET: APIRoute = () => new Response(siteConfig.productionUrl ? `User-agent: *\nAllow: /\nSitemap: ${siteConfig.productionUrl.replace(/\/$/,'')}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
