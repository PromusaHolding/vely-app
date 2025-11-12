/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D6D', // rosa principal
        accent: '#9B5DE5',  // morado/acento
        rose: {
          500: '#F43F5E',
          600: '#E11D48',
          100: '#FDE2E7'
        },
      },
      fontFamily: {
        headline: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
