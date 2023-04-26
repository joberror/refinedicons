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
					content: `Bolarinwa Olakunle (Joberror) - ${new Date().getFullYear()}`,
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
		[
			"@vite-pwa/nuxt",
			{
				registerType: "autoUpdate",
				injectRegister: "auto",
				manifest: {
					name: "Refinedicons for UI & UX",
					short_name: "Refinedicons",
					description: "Unique icons for web developers and designers",
					theme_color: "#ffffff",
					icons: [
						{
							src: "pwa-192x192.png",
							sizes: "192x192",
							type: "image/png",
						},
						{
							src: "pwa-512x512.png",
							sizes: "512x512",
							type: "image/png",
						},
					],
				},
				workbox: {
					globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
					runtimeCaching: [
						{
							urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
							handler: "CacheFirst",
							options: {
								cacheName: "google-fonts-cache",
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
								},
								cacheableResponse: {
									statuses: [0, 200],
								},
							},
						},
						{
							handler: "NetworkOnly",
							urlPattern: /\/api\/.*\/*.json/,
							method: "POST",
							options: {
								backgroundSync: {
									name: "myQueueName",
									options: {
										maxRetentionTime: 24 * 60,
									},
								},
							},
						},
						{
							urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
							handler: "CacheFirst",
							options: {
								cacheName: "gstatic-fonts-cache",
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
								},
								cacheableResponse: {
									statuses: [0, 200],
								},
							},
						},
					],
				},
				client: {
					installPrompt: true,
					// you don't need to include this: only for testing purposes
					// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
					periodicSyncForUpdates: 20,
				},
				devOptions: {
					enabled: false,
					type: "module",
				},
			},
		],
	],
	components: {},
});
