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
			input: "#E4E4E4",
			buildingl: "#FC6076",
			building2: "#FF9A44",
			marketing1: "#B1AFF0",
			marketing2: "#836DF0",
			planning1: "#10AE23",
			planning2: "#22FFA4",
			monetizing1: "#625EB1",
			monetizing2: "#22E1FF",
			speaker: "#5A5A5A",
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/herobg.jpg')",
				"upcoming-pattern": "url('/upcomingbg.png')",
				"login-pattern": "url('/login.png')"
			}
		}
	},
	plugins: []
}
