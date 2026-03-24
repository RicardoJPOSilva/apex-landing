/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(260 87% 3%)',
        fg: 'hsl(40 6% 95%)',
        primary: {
          DEFAULT: 'hsl(121 95% 76%)',
          foreground: 'hsl(260 87% 3%)',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
