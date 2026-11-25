# Cloudflare deployment

The project is configured for Astro static output with the Cloudflare adapter and `wrangler.jsonc`. This document is a preparation guide, not an instruction to deploy now.

## Before production

- Purchase and approve the production domain.
- Set `PUBLIC_SITE_URL` to the approved HTTPS origin, without a trailing slash.
- Add approved business name, contact details and social URLs in `src/config/site.ts`.
- Approve and complete privacy and cookie policies.
- Approve a form delivery implementation and, if needed, Turnstile credentials and Worker endpoint.
- Add approved GA4/GTM identifiers only after consent implementation is approved.
- Confirm the final sitemap, legal links and redirect policy.

## Build and preview

```sh
npm ci
npm run check
npm run build
npx wrangler dev
```

The generated static assets are in `dist/client/`. The current configuration uses Cloudflare Workers assets and does not require a database. Do not run a production deploy until all pre-production items are approved.
