import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'@assets': resolve(__dirname, './assets'),
		'@scss': resolve(__dirname, './assets/scss'),
		'@components': resolve(__dirname, './components'),
		'@atoms': resolve(__dirname, './components/atoms'),
		'@molecules': resolve(__dirname, './components/molecules'),
		'@organisms': resolve(__dirname, './components/organisms'),
	},
});
