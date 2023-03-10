// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss: {
        cssPath: '~/assets/scss/index.scss',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BACKEND_URL
        }
    },
    build: {
        transpile: ["motion/vue", "@motionone/vue"]
    }
})
