// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      titleTemplate: '%s · Seraphic Homes',
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@300;400;500;600;700&display=swap"
        }
      ]
    }
  },

  css: [
    "@/assets/css/tailwind.css",   // ✔ Now resolves to /app/assets/css/
    "@/assets/scss/global.scss",   // ✔ OK
  ],

  modules: ['@nuxt/icon'],

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true }
});
