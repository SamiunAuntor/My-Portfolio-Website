/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // greenish
          dark: '#059669',
          light: '#34d399',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#10b981",
          "secondary": "#059669",
          "accent": "#34d399",
          "neutral": "#3d4451",
          "base-100": "#e5e7eb", // slightly darker gray
          "base-200": "#f3f4f6", // lighter gray
          "base-300": "#d1d5db",
        },
        dark: {
          "primary": "#10b981",
          "secondary": "#059669",
          "accent": "#34d399",
          "neutral": "#1f2937",
          "base-100": "#0f172a", // darker navy blackish gray
          "base-200": "#1a2230", // darker neutral gray with subtle blue undertone
          "base-300": "#334155",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
}

