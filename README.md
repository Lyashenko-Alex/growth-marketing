# Growth Marketing website

Static-first bilingual Astro website for Growth Marketing. Slovenian is the default locale; English lives under `/en/`.

## Local development

Requirements: Node.js `>=22.23.4` and npm `>=9.6.5`.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

The site intentionally has no production URL, contact delivery endpoint, analytics IDs, legal company data, or public contact details. Copy `.env.example` to `.env` only after owner approval. Until `PUBLIC_SITE_URL` is configured, pages are marked `noindex`, canonical tags are omitted, `robots.txt` disallows crawling, and the sitemap contains no URLs.

## Structure

- `src/config/site.ts` — agency identity, locales, navigation, localized copy.
- `src/config/pricing.ts` — package prices, features and commercial conditions.
- `src/content/config.ts` — blog collection schema.
- `src/components/` — layout, SEO, header, footer, pricing and form components.
- `src/pages/` — localized routes and SEO endpoints.
- `wrangler.jsonc` — Cloudflare Workers static asset configuration.

See [BLOG-PUBLISHING.md](./BLOG-PUBLISHING.md), [DEPLOYMENT.md](./DEPLOYMENT.md), and [IMPLEMENTATION-REPORT.md](./IMPLEMENTATION-REPORT.md).

No deployment or remote repository operation is performed by this project.
