import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// build.format 'file' keeps exact .html URLs (agifid.be/, agifid.be/index-en.html, ...)
// instead of Astro's default clean-URL folders - matches what's already live/indexed.
// output 'hybrid' + vercel adapter: only /keystatic needs SSR (admin UI), rest of the
// site stays prerendered/static like before.
export default defineConfig({
  site: 'https://agifid.be',
  output: 'hybrid',
  adapter: vercel(),
  build: {
    format: 'file',
  },
  integrations: [react(), keystatic()],
});
