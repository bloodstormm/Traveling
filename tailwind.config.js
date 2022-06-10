module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Binerka': ["Binerka", "sans-serif"]
    },
    extend: {
      animation: {
        wavy: "wavy 2s linear infinite"
      },
      keyframes: {
        wavy: {
          "0%": {
            transform: "translateX(-1px)"
          },
          "100%": {
            transform: "translateX(-56px)"
          }
        }
      },
      colors: {
        'creamBG': "#e3dfd7",
        'light-orange': "#e6d2c0",
        'main-orange': "#fab583",
        'second-orange': "#fdc886",
        'blackText': "#3b3835",

      }
    },
  },
  plugins: [],
}
