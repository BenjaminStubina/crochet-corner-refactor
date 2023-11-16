/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#A4CEFC',
        'lightBlue': '#CCE4FD',
        'purple': '#D283FF',
        'lightPurple': '#C9AFFF',
        'green': '#98D998',
        'lightGreen': '#B8E6B8',
        'yellow': '#FFE985',
        'lightYellow': '#FFF0AD',
        'orange': '#FFCC84',
        'lightOrange': '#FFE1A8'
      },
      screens: {
        'lg': '1024px',
        '2xl': '1800px'
      }
    },
  },
  plugins: [],
}

