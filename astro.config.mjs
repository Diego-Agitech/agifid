import { defineConfig } from 'astro/config';

// build.format 'file' keeps exact .html URLs (agifid.be/, agifid.be/index-en.html, ...)
// instead of Astro's default clean-URL folders - matches what's already live/indexed.
export default defineConfig({
  site: 'https://agifid.be',
  build: {
    format: 'file',
  },
});
