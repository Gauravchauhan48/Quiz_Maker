/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/src/data/New-blog-graphic.jpg')",
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}


