/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./portfolio/*.{html,js}"
    ],
    theme: {
      extend: {
        colors: {
          'darkMint': '#07271a',
          'mintCream': '#e1f4ed',
          'primary': '#efd00b',
          'secondary': '#d5803f',
          'accent': '#9cd043',
          'boxDark': '#162717',
          'boxLight': '#E2F2E2',
      },
      },
    },
    plugins: [
    ],

    darkMode: 'class',
  }


