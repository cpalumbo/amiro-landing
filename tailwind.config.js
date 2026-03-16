/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7C5BBF',
          dark: '#6544A8',
          light: '#F3EEFF',
          mid: '#E8DEFF',
        },
        surface: '#F5F6F8',
        text: {
          DEFAULT: '#1A1A2E',
          secondary: '#6B7280',
        },
        green: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
