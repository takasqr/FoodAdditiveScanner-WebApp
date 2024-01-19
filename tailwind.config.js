/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          light: '#e06666',
          DEFAULT: '#e06666',
          dark: '#f1c232'
        },
        primary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#0e7490',
        },
        primaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#0e7490',
        },
        primaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
        secondary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#0e7490',
        },
        secondaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#0e7490',
        },
        secondaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        background: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
        surface: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
}

