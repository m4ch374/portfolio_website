/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "logo": ["Garet", "sans-serif"]
      },
      dropShadow: {
        "day-sun": "0 0px 2em #fde68a",
        "night-sun": "0 0 7em #a5f3fc"
      },
      boxShadow: {
        "day-sun": "0 0px 0.5em #facc15",
        "night-sun": "0 0 7em #a5f3fc"
      }
    },
  },
  plugins: [],
}
