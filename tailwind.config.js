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
        padding: "20px"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#6C63FF",
        secondary: "#6C63FF",
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

