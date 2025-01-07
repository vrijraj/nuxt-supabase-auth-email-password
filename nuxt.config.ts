// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase"],
  supabase:{
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ['/login', '/signup', '/about',],
      cookieRedirect: false,
    },
  }
});
