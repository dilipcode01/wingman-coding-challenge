/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif','Inter'],
      },
      colors: {
        'custom-green': '#115e56', // Add the custom color
        'light-gren' : '#CCFBEF'
      },
    },
  },
  plugins: [],
}