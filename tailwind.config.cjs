/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif']
      },
      zIndex: {
        '100': '100',
      },
      colors: {
        'malibu': {
          '50': '#f0f8fe',
          '100': '#ddeefc',
          '200': '#c2e2fb',
          '300': '#99d0f7',
          '400': '#80c2f4',
          '500': '#4598ec',
          '600': '#2f7de1',
          '700': '#2767ce',
          '800': '#2654a7',
          '900': '#244984',
      },
      }
    },

  },
  plugins: [],
}