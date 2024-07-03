/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{html,js}', './src/app/index.html'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
