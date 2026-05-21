import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Production site URL — used for canonical URLs, sitemap, OG tags.
const SITE_URL = 'https://tiligul.club';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  // 301 redirects from likely legacy URLs to their canonical replacements.
  // Add or adjust here if the old site exposed different slugs.
  redirects: {
    '/glamping': '/camping',
    '/kiteschool': '/kite',
    '/kite-school': '/kite',
    '/menu': '/cafe',
    '/restaurant': '/cafe',
    '/about-us': '/about',
    '/booking': '/beach',
    '/contact': '/contacts',
  },
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  image: {
    // Astro will use Sharp for image optimization at build time.
    // Source images live in src/assets/images/.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA' },
      },
    }),
  ],
});
