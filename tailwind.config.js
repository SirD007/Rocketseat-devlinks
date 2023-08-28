/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'web-bg': "url('/src/assets/web-bg.png')",
        'web-bg-light': "url('/src/assets/web-bg-light.png')",
        'mobile-bg': "url('/src/assets/mobile-bg.png')",
        'mobile-bg-light': "url('/src/assets/mobile-bg-light.png')",
      }
    },
  },
  plugins: [],
}