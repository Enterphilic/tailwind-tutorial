/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '758px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightredlight: '(12, 88% 69%)',
        brightredsuplight: 'hsl(12, 88% 99%)'

      }
    },
  },
  plugins: [],
}

