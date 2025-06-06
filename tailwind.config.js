/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class", // not 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
