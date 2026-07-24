const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        yellow: {
          100: "#F0DB4F",
        },
        black: {
          100: "#323330",
          200: "#28282B",
          300: "#000000",
        },
        "teal-accent": {
          400: "#2DD4BF",
          500: "#14B8A6",
        },
      },
    },
  },
  plugins: [],
});