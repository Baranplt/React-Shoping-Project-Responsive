/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '1000px',
        md: '11028px',
        lg: '1384px',
        xl: '1640px',
        '2xl': '1850px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://themewagon.github.io/eshopper/img/carousel-1.jpg')",
        'footer-texture': "url('https://themewagon.github.io/eshopper/img/carousel-2.jpg')",
      },
      colors: {
        'regal-blue': '#EDF1FF',
        'text-color': '#1C1C1C',
        'primary-color': '#D19C97 '
      },
    },
  },
  plugins: [],
}