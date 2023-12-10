/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "logo": ["Callahan", "sans-serif"]
    },
    extend: {
      dropShadow: {
        "day-sun": "0 0px 4em #facc15",
        "night-sun": "0 0 7em #a5f3fc"
      }
    },
  },
  plugins: [],
}
