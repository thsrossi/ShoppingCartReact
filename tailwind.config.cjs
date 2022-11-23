/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        gray:{
          900: "#2F2E41",
          800: '#999999'
        },
        blue:{
          500: "#009EDD"
        }
      },
      fontFamily:{
        sans: "Open sans"
      },
      padding:{
        11: '0.6875rem'
      }
    },
  },
  plugins: [],
}
