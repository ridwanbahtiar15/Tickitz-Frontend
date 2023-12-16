/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
        nunito: ["Nunito"],
      },
      colors: {
        primary: "#1D4ED8",
        secondary: "#4E4B66",
        success: "#008000",
        dark: "#14142B",
        light: "#FFF",
      },
    },
  },
  plugins: [],
};
