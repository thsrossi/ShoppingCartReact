/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        gray:{
          900: "#2F2E41",
          800: '#999999',
          500: '#D9D9D9'
        },
        blue:{
          500: "#009EDD"
        },
        green:{
          600: "#039B00"
        }
      },
      fontFamily:{
        sans: "Open sans"
      },
      padding:{
        11: '0.6875rem', 
        15: '3.75rem',
      }
    },
  },
  plugins: [],
}
