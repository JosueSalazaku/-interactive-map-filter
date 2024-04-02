// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    // For Nuxt 3
    server: {
      proxy: {
        '/boundaries-api/': {
          target: 'https://boundaries-api.io/',
          changeOrigin: true,
          rewritePath: path => path.replace(/^\/boundaries-api/, ''),
        },
      },
    },
  },
});
