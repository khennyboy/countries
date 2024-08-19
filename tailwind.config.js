/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        Blue: 'hsl(209, 23%, 22%)',
        darkBlue: 'hsl(200, 15%, 8%)',
        veryDarkBlue: ' hsl(207, 26%, 17%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightGray: 'hsl(0, 0%, 98%)'
      },
      screens: {
        tablet: { max: '60em' },
        largeTablet: { max: '88em', min: '61em' },
        mobile: { max: '30em' },
        smallMobile: { max: '21.25em' }
      },
    },
  },
  plugins: [],
}