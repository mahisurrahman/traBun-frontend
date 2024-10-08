/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#262626",
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], 
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
