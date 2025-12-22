/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        citiesLoop: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-in-1': 'slideIn 0.8s ease-out 0.2s forwards',
        'slide-in-2': 'slideIn 0.8s ease-out 0.45s forwards',
        'slide-in-3': 'slideIn 0.8s ease-out 0.7s forwards',
        'slide-in-4': 'slideIn 0.8s ease-out 0.95s forwards',
        'cities-loop': 'citiesLoop 22s linear infinite',
      },
    },
  },
  plugins: [],
}

