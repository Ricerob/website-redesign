/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
    colors: {
      'light-tan': '#EAE0CC',
      'terracotta': '#C9ADA1',
      'l-green': '#A0A083',
      'm-green': '#798478',
      'd-green': '#4D6A6D'
    }
  },
  plugins: [],
}
