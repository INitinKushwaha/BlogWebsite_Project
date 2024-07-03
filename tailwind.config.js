/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2563eb, #ec4899, #3b82f6)',
        'custom-gradient-dark': 'linear-gradient(to right, #1e3a8a, #9d174d, #1e3a8a)',
      },
    },
  },
  plugins: [],
}

