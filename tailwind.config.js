/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'appColor': 'rgb(13, 7, 20)',
        'inputBorder': 'rgb(62, 22, 113)',
        'addBtnBg': 'rgb(158, 120, 207)'
      },
    },
  },
  plugins: [],
}

