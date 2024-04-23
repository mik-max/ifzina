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
        secondary: {
          DEFAULT: "#fefae0",
          text: "#777777",
        },
        accent: {
          light: "#fefae0",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
