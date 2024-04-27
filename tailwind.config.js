/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004080",
        blue: {
          500: "#0073E5"
        },
        black:{
          300:"#131316"
        },
        grey:{
          400: "#56616B"
        },
        secondary: {
          DEFAULT: "#fefae0",
          text: "#777777",
        },
        accent: {
          light: "#fefae0",
          dark: "#333333",
        },
      },
      backgroundImage: {
          'launch-bg': "url('/images/launch.jpg')",
          'about-bg': "linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)),url('/images/bg1.jpg')",
          'market-bg': "linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)),url('/images/markets.jpg')",
     }
    },
  },
  plugins: [],
};
