require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'showroom-streaming-surveillance',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.DESCRIPTION_N },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.BASE_TITLE },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:title', property: 'og:title', content: process.env.BASE_TITLE },
      { hid: 'og:description', property: 'og:description', content: process.env.DESCRIPTION_N },
      { hid: 'og:image', property: 'og:image', content: process.env.BASE_IMG },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/localStorage.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // 環境設定
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_TITLE: process.env.BASE_TITLE,
    BASE_IMG: process.env.BASE_IMG,
    DESCRIPTION: process.env.DESCRIPTION_N,
    MICROCMSKEY: process.env.MICROCMSKEY,
  },

  // 動的ルーティングを行う
  generate: {
    fallback: true
  },

  server: {
    host: '0.0.0.0'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
