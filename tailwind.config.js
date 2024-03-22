/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gap: {
        '30rem': '30rem',
      },
      margin: {
        '33rem': '33rem',
      },
      height: {
        '43rem': '43rem',
      }
    },
  },
  plugins: [],
});

