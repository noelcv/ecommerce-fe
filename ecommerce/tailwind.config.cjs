/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', //just in time
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ], //files to build
  theme: {
    extend: {},
  },
  variants: {},
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',

  plugins: [require('@tailwindcss/forms')],
};
