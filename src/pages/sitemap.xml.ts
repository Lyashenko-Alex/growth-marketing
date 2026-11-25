import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
const paths = ['/', '/cenik/', '/blog/', '/kontakt/', '/en/', '/en/pricing/', '/en/blog/', '/en/contact/'];
export const GET: APIRoute = () => { const base=siteConfig.productionUrl.replace(/\/$/,''); const body=base ? paths.map(path=>`<url><loc>${base}${path}</loc></url>`).join('') : ''; return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { 'Content-Type':'application/xml' } }); };
