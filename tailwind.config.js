/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "green-monstercat": "#518970",
        "grey-monstercat": "#fdfdfd",
        "grey-light-monstercat": "#383838",
      },
    },
  },
  plugins: [],
};
