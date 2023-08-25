// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  pages:true,
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  plugins: [
    '~/plugins/animateOnScroll.client.js'
  ],
  experimental: {
    payloadExtraction: false
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app:{
    head: {
      title: 'Nexcent',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],
    },
  }

})
