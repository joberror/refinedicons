import { searchForWorkspaceRoot } from "vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Refined Icons: uniquely crafted icons for UI",
			meta: [
				{ name: "author", content: "Bolarinwa Olakunle (Joberror)" },
				{
					name: "description",
					content:
						"Crafted with care: Unique icons for web developers and designers",
				},
				{
					name: "keywords",
					content: "icons,visuals,svg,dev,design,ui,ux",
				},
				{ name: "rating", content: "General" },
				{
					name: "copyright",
					content:
						"Bolarinwa Olakunle (Joberror) - " + new Date().getFullYear(),
				},
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=yes" },
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.svg",
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
				},
			],
		},
	},
	modules: [
		[
			"@nuxtjs/tailwindcss",
			{
				cssPath: "~/assets/css/tailwind.css",
				configPath: "tailwind.config",
				exposeConfig: false,
				config: {},
				injectPosition: 0,
				viewer: true,
			},
		],
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Sen: [400, 700, 800],
				},
				display: "swap",
				prefetch: true,
				preconnect: true,
			},
		],
	],
	components: {},
});
