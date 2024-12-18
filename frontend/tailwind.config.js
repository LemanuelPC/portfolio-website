/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cvBackground: '#F2ECE9',
        cvAccent: '#91263D',
        cvText: '#000000',
      },
    },
  },
  plugins: [],
};
