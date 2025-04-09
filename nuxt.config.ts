export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
