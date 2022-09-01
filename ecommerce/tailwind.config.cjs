/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', //just in time
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ], //files to build
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {},
  },
  variants: {},
  corePlugins: {
    preflight: false,
  },
  prefix: '',

  plugins: [require('@tailwindcss/forms'), require("tailwind-gradient-mask-image")],
};
