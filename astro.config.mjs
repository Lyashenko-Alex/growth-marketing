import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({ imageService: 'compile', prerenderEnvironment: 'node' }),
  security: { checkOrigin: true },
  build: { format: 'directory' }
});
