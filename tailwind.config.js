/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka One'],
        concert: ['Concert One']
      },
    },
  },
  plugins: [],
}
