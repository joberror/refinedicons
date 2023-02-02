const colors = require("tailwindcss/colors");

module.exports = {
	theme: {
		extend: {
			colors: {
				"cb": "#C3FABB", // Base color
				"cba": "#15A600", // Base active
				"brd": "#5EEC4A", // input border
				"cbd": "#5A7959", // Base dark
				"cbg": "#FBFEFA", // Content background
				"cmb": "#DAFCD5", // Main background
				"cpn": "#092C08", // Project name
				"cib": "#F6F6F6", // Input background
			},
			boxShadow: {
				mc: "0px -2px 17px rgba(117, 112, 112, 0.25)",
				sbl: "2px 0px 4px rgba(0, 0, 0, 0.1)",
				sbr: "-2px 0px 4px rgba(0, 0, 0, 0.1)",
			},
			backgroundImage: {
				"viewer": "url('ui/viewer-bg.svg')",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
		},
	},
};
