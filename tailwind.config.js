/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      dark: 'var(--dark)',
      'dark-background': 'var(--dark-background)',
      'light-mode-text': 'var(--light-mode-text)',
      light: 'var(--light)',
      'light-background': 'var(--light-background)'
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
