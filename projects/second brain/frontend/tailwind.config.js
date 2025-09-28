/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#f9fbfc",
          500:"#70747f"
        },
        purple:{
          300:"#e0e7fe",
          500:"#3e38a7",
          600:"#5046e3"
        }
      }
    },
  },
  plugins: [],
}

