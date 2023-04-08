/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}', // Fixed the path, it was missing "/src"
  ],
  theme: {
    fontSize: {
      xl: ['1.25rem', {
        lineHeight: '1rem',
      }]
    },
  },
  plugins: [],
}
