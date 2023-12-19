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
        danger: "#D00707",
        backgorund_gray: "#A0A3BD33",
        input_bg: "#FCFDFE",
        input_border: "#DEDEDE",
        purple_border: "#5F2EEA",
      },
      dropShadow: {
        range: "0px 17px 17px 17px 0px rgba(17, 17, 17, 0.16) inset",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
