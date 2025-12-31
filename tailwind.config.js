/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#5865F2',
        background: '#121212',
        surface: '#1E1E1E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        tier: {
          op: '#FF4500',
          1: '#FF8C00',
          2: '#32CD32',
          3: '#1E90FF',
          4: '#808080',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
