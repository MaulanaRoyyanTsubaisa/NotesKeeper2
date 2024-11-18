/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./__dirname", // Pastikan ini mencakup semua file React Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        mclaren: ['"McLaren"', "cursive"], // Tambahkan font McLaren
        montserrat: ['"Montserrat"', "sans-serif"],
        architects: ['"Architects Daughter"', "cursive"],
      },
    },
  },
  plugins: [],
};
