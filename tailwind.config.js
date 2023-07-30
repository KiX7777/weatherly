/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
