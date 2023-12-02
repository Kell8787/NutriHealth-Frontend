/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-1": "#CBE0C1",
        "main-2": "#92CDB1",
        "main-3": "#44A978",
        "main-hover": "#B6C9AD",
        "textbox-color": "#D9D9D9",
        "button-1": "#F5BD67",
        "button-2": "#EACFA7",
        "button-3": "#F7A44A",
        "text-sec": "#615D67",
        "letter-cascade": "615D67",

      },
      fontFamily: {
        "baloo": ['Baloo-2', 'sans-serif']
      }
    },
  },
  plugins: [],
}