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
      sm: "14px",
    },
  },
  plugins: [],
};
