/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "beginning-joy": ['"Beginning Joy Bold"', "sans-serif"],
      },
      colors: {
        "rose-950": "#4A0D0D",
        "amber-200": "#FDE68A",
      },
    },
  },
  plugins: [],
};
