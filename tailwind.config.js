/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      spacing: {
        'container': '1320px',
      },

      colors:{
        'btncolors':'#FDBB57',
        'prymariColor':'#FAE3B6',
        'enddColor':'#CFA485',
      },
      fontFamily: {
        pop:'Poppins',
        frank:'Frank Ruhl Libre'
      }


     },
  
  },
  plugins: [],
}

