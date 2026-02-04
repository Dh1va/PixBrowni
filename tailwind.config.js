/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep Navy/Slate
        accent: "#c5a47e",  // Muted Gold
      },
      fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
};