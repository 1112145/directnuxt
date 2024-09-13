// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NUXT_DIRECTUS_URL: process.env.NUXT_DIRECTUS_URL
    }
  }
})
