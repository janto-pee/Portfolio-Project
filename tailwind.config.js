
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f3ff",
          100: "#e8e7ff",
          200: "#d9d8f5",
          300: "#c4c3e0",
          400: "#9e9db9",
          500: "#7c7b96",
          600: "#56556e",
          700: "#43435b",
          800: "#25263c",
          900: "#03001c",
        },
        secondary: {
          50: "#e1f7f1",
          100: "#b6eada",
          200: "#8bdcc4",
          300: "#65ccad",
          400: "#4dbf9c",
          500: "#41b28d",
          600: "#3ba480",
          700: "#359270",
          800: "#2f8262",
          900: "#256547",
        },
        neutral: {
          50: "#f7fbff",
          100: "#f2f6fc",
          200: "#edf1f6",
          300: "#dfe3e9",
          400: "#bdc1c6",
          500: "#9ea2a7",
          600: "#75797e",
          700: "#616569",
          800: "#42454a",
          900: "#212428",
        },
      },
    },
  },
  plugins: [],
}