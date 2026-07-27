import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['motion-v/nuxt', '@nuxt/fonts'],
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  fonts: {
    provider: 'google',
  }
})
