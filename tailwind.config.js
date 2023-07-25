/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        owner: {
          primary: "#130477",
          secondary: "#AC66F2",
          accent: "#A3F26B",
          neutral: "#aab5c0",
          "base-100": "#FAFAFA",
          info: "#0092d6",
          success: "#6cb288",
          warning: "#daad58",
          error: "#ab3d30",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        display: "Racing Sans One",
        sans: "Noto Sans",
        serif: "Noto Serif",
        ubuntu: "Ubuntu",
        roboto: "Roboto",
        titilium: "Titillium Web",
        source: "Source Sans Pro",
        "source-code": "Source Code Pro",
        bree: "Bree Serif",
        noto: "Noto Sans",
        "noto-serif": "Noto Serif",
        racing: "Racing Sans One",
      },
    },
  },
  plugins: [require("daisyui")],
};
