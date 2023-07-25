/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        owner: {
          primary: "#1C05AD",

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
    extend: {},
  },
  plugins: [require("daisyui")],
};

