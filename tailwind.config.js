import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#202022',
        'gray-light': '#fafafd',
        'gray-dark': '#2a2a2c',
      },
      lineHeight: {
        14: '3.25rem',
        15: '3.75rem',
        20: '5rem',
      },
      borderRadius: {
        block: '1.3125rem',
      },
    },
  },
  plugins: [],
}
