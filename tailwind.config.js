/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#4FC3F7",
        light: {
          title: "#484E53",
          body: "#484E53",
          background: "#E0E8F6",
        },
        dark: {
          title: "#FFFFFF",
          body: "#E1E1E1",
          background: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
}

