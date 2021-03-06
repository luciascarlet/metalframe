const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
