/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    letterSpacing: {
      1: '0em',
      2: '0.025em',
      3: '0.5em',
      4: '1em',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-italic': ['gillroy-italic'],
        'classy-vogue': ['Classy-Vogue'],
        'sequel-sans-ld': ['Sequel-Sans-Light-Display'],
        'sequel-sans-md': ['Sequel-Sans-Medium-Display'],
        'sequel-bold-bold': ['Sequel-Sans-Bold-Display'],
        'sequel-semi-bold': ['Sequel-Sans-Semi-Bold-Display'],
        'sf-pro-regular': ['SF-Pro-Text-Regular'],
        'sf-pro-light': ['SF-Pro-Text-Light'],
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(200%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out',
        slideInFromRight: 'slideInFromRight 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
