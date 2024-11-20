import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@assets": resolve(__dirname, "./assets"),
    "@css": resolve(__dirname, "./assets/css"),
    "@components": resolve(__dirname, "./components"),
    "@atoms": resolve(__dirname, "./components/atoms"),
    "@molecules": resolve(__dirname, "./components/molecules"),
    "@organisms": resolve(__dirname, "./components/organisms"),
  },
});
