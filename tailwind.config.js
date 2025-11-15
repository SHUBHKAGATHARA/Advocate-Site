/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#caa43a', // gold
        accent2: '#1e90ff' // royal blue
      },
      backgroundImage: {
        'dark-legal': 'linear-gradient(180deg,#030312 0%,#0b0b11 50%, #081226 100%)'
      }
    },
  },
  plugins: [],
}