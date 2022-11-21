import { searchForWorkspaceRoot } from "vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Simpicons: icons for UI designs",
			meta: [
				{ name: "author", content: "Bolarinwa Olakunle (Joberror)" },
				{
					name: "description",
					content:
						"Simple and visually designed icons for web development and design",
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
		},
	},
	buildModules: [
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Lexend: [400, 500, 600],
				},
				display: "swap",
				prefetch: true,
				preconnect: true,
			},
		]
	],
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
	],
	components: {},
});

