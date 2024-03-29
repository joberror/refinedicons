/* eslint-disable @typescript-eslint/no-require-imports */
const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	plugins: [require("tailwindcss-scrollbar"), require("tailwindcss-animated")],
	theme: {
		extend: {
			colors: {
				theme: {
					// Generic
					primary: {
						100: "#A0A3BD",
						200: "#6F6C90", // primary
						300: "#514F6E",
						400: "#28283E", // text
						900: "#5D5FEF", // figma
					},
					bg: "#EFF0F6",
					// Dark theme
					dark: {
						bg: "#0F0E14",
					},
				},
			},
			boxShadow: {
				box: "0 1px 3px rgba(11, 19, 36, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
			},
			backgroundImage: {
				bgLight:
					"radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.33) 0px, rgba(0, 0, 0, 0) 50%), radial-gradient(at 98% 1%, rgba(212, 25, 118, 0.33) 0px, rgba(0, 0, 0, 0) 50%)",
			},
			gridTemplateRows: {
				all: "repeat(auto-fill, minmax(96px, 1fr))",
				few: "repeat(3, minmax(96px, 1fr))",
			},
			gridTemplateColumns: {
				all: "repeat(auto-fill, minmax(96px, 1fr))",
				few: "repeat(3, minmax(96px, 1fr))",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			slate: colors.slate,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			indigo: colors.indigo,
		},
	},
	variants: {
		extend: {
			backgroundImage: ["dark"],
		},
		scrollbar: ["dark"],
	},
};
