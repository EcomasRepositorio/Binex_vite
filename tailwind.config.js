/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom1': '#1DDAB8',
        'custom2': '#2878B7',
      },
    },
  },
  plugins: [],
};



