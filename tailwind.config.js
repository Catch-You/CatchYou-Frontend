/** @type {import('tailwindcss').Config} */

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      width: px0_1000,
      height: px0_1000,
      borderRadius: px0_1000,
      fontSize: px0_100,
      lineHeight: px0_100,
      padding: px0_1000,
      margin: px0_1000,
      colors: {
        mainColor: '#112D4E',
        subColor: '#3F72AF',
        superSubColor: '#DBE2EF',
        errorColor: '#F4800B',
        errorSubColor: '#FCF0E5',
        blackColor: '#1D1D1D',
        grayColor: '#717073'
      }
    },
  },
  plugins: [],
}

