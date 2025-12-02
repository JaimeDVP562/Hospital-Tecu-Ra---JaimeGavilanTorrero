/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './registro-urgencias.html',
    './triaje.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#515b94',
        secondary: '#007bff',
        accent: '#ff4b5c',
        footer: '#333333',
        sitebg: '#f4f4f4',
        sitetext: '#333333'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
