/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-black': '#0C0C0C',
        'secondary-brown': '#481E14',
        'third-light-orange': '#9B3922',
        'fourth-dark-orange': '#9B3922',
      },
    },
  },
  plugins: [],
}
