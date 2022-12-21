/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px"
			// => @media (min-width: 1280px) { ... }
		},
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
			sidebar: "#FBFBFB",
      input: '#E4E4E4'
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
