/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'rotate(-360deg)' },
          '100%': { opacity: 1, transform: 'rotate(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'rotate(0)' },
          '100%': { opacity: 0, transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

