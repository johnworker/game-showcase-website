export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:5000/api'
        }
    }
});
