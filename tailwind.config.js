/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        poppins: 'Poppins',
        raleway: 'Raleway',
        spaceMono: 'Space Mono'
      },
      backgroundImage:{
        image: "url('/images/bg.jpg')"
      }
    },
  },
  plugins: [],
}
