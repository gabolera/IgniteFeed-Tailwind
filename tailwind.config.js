const plugin = require('tailwindcss/plugin')

module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'green': {
        DEFAULT: '#00875F',
        'light': '#00B37E',
      },
      'gray': {
        800: '#121214',
        700: '#202024',
        600: '#323238',
        500: '#7C7C8A',
        400: '#8D8D99',
        300: '#C4C4CC',
        200: '#E1E1E6',
      },
      'red-danger': '#F75A68',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('third', '&:nth-child(3)')
    })
  ],
}