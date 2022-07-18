/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Binerka': ["Binerka", "sans-serif"]
    },
    extend: {
      colors: {
        'creamBG': "#e3dfd7",
        'light-orange': "#e6d2c0",
        'main-orange': "#fab583",
        'second-orange': "#fdc886",
        'blackText': "#3b3835",
      },
      backgroundImage: {
        'imgLogin': "url('img/imgLogin2.jpg')"
      }
    },
  },
  plugins: [],
}
