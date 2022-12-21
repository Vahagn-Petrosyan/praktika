/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			footBlack: "#283746",
			yellow: "#FFAB00",
			"gray-black": "#283746",
			"hero-button": "#f8f8f8",
			search: "#6C757D",
			gradientfirst: "#3D70F0",
			gradientsecond: "#B561C8",
			sidebar: "#FBFBFB",
			input: "#E4E4E4"
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/herobg.jpg')",
				"upcoming-pattern": "url('/upcomingbg.png')"
			}
		}
	},
	plugins: []
}
