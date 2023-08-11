/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0.20)",
        whitesmoke: "#ececec",
        dimgray: "#4d4d4d",
        steelblue: "#077cc0",
        white: "#fff",
      },
      fontFamily: {
        encode: "Encode Sans",
        sora: "Sora",
      },
    },
    fontSize: {
      sm: "0.6rem",
      base: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
