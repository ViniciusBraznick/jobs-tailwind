/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/container-queries'),
  ],
}
