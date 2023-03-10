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
    ],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BACKEND_URL
        }
    },
    plugins: [{ src: '~/plugins/lottie-player', mode: 'client' }];
})
