/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "black": "#000000",
      "footBlack": "#283746",
      "yellow": "#FFAB00",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/herobg.jpg')",
      }
    },
  },
  plugins: [],
};
