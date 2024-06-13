import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const config: import('@storybook/vue3-vite').StorybookConfig = {
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	async viteFinal(config) {
		const { mergeConfig } = await import('vite');
		return mergeConfig(config, {
			plugins: [vue()],
			resolve: {
				alias: {
					'@assets': resolve(__dirname, '../assets'),
					'@components': resolve(__dirname, '../components'),
					'@scss': resolve(__dirname, '../assets/scss'),
					'@atoms': resolve(__dirname, '../components/atoms'),
					'@molecules': resolve(__dirname, '../components/molecules'),
					'@organisms': resolve(__dirname, '../components/organisms'),
				},
			},
		});
	},
};

export default config;
