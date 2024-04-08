/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        naratama: {
          100: '#c6d6cc',
          200: '#7c9881',
          300: '#4e6b4d',
          400: '#2e4028',
          500: '#262f1c',
        },
      },
    },
  },
  plugins: [],
};
