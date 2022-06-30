import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    BASIC_AUTH_USERNAME: process.env.BASIC_AUTH_USERNAME,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
    BASIC_AUTH_ENABLED: process.env.BASIC_AUTH_ENABLED,
  },
  app: {
    /*
     ** Headers of the page
     */
    head: {
      titleTemplate: `%s｜イカイベ`,
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap',
        },
      ],
    },
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],
})
