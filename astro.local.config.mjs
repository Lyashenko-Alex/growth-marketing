import { defineConfig } from 'astro/config';

// Local browser development uses Astro's Node server. Production keeps the
// Cloudflare adapter in astro.config.mjs without requiring workerd locally.
export default defineConfig({ output: 'static', build: { format: 'directory' } });
