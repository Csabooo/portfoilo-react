/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        windson: ["windson"],
        robotomedium: ["robotomedium", "sans-serif"],
      },
      fontSize: {
        heading_XL: [
          "88px",
          {
            lineHeight: "88px",
            letterSpacing: "-2.5px",
            fontWeight: "700",
          },
        ],
        heading_L: [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-1.5px",
            fontWeight: "700",
          },
        ],
        heading_M: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        body_L: [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
      },
    },
    colors: {
      light_yellow: "#f4f1de",
      black: "#151515",
      green: "#4EE1A0",
      dark_grey: "#242424",
      grey: "#706e6e",
      white: "#FFFFFF",
      red: "#c83e19",
    },
  },

  plugins: [],
};
