export default {
  head: {
    title: 'hsa-games',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [],
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  build: {},
  target: 'server',
  ssr: true,
  telemetry: false,

  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://hsa-games.com' : 'http://localhost:3000'
  }
}

