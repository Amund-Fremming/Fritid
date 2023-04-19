/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"]
      },
      colors: {
        'ss-house': "#FF9A00",
      },
    },
  },
  plugins: [],
}