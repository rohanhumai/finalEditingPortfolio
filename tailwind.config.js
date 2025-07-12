/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Required for class-based dark mode support
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // if you're using /src structure
  ],
  theme: {
    extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
}
  }
}
