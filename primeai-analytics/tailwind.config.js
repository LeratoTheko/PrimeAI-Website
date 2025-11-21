/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // replace default sans
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
