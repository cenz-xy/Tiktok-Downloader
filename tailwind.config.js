/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-1": "#2F2F2F",
        "color-2": "#F0F0F0",
        "color-3": "#00F2EA",
        "color-4": "#FF004F",
      },
    },
  },
  plugins: [],
};
