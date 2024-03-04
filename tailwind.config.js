/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: {'max':'920px'}
      },
      colors: {
        primary: {
          bg: 'rgb(0,0,33)',
          main: 'rgb(18,18,62)',
          hover: 'rgb(142, 142, 241)',
          special: 'rgb(110, 110, 241)',
          bar: 'rgb(119, 119, 236)',
          shadow: 'rgba(158, 143, 248, 0.2)'
        }
      },
    },
  },
  plugins: [],
}

