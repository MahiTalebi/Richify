/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "green-150": "#f9e4bc",
        "green-750": "#515e4a",
        "olive-150": "#758f67",
        "black-750": "#d7b577",
      },
    },
  },
  plugins: [],
};
