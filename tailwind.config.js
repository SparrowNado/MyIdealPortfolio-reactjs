const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans: ["Roboto", "sans-serif"]
    },


    extend: {},

    colors: {
      yellow:{
        100:"#F0DB4F",
      
      },

      black:{
        100:"#323330",
        200:"#28282B",
        300:"#000000",
      },
    },
  },
  plugins: [],
});

