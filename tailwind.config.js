/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        darkgold: '#b89527',
        bone: '#dedbbd',
        darkbone: '#c7c4a9',
        cream: '#fffbe9',
      },
    },
  },
  plugins: [],
}
