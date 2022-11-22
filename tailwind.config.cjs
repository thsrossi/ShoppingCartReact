/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        gray:{
          900: "#2F2E41",
          800: '#999999'
        }
      },
      fontFamily:{
        sans: "Open sans"
      },
    },
  },
  plugins: [],
}
