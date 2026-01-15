import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elimedia Brand Colors (basierend auf Logo)
        // Primär: Gold-Töne (Logo-Akzent)
        gold: {
          50: '#fefbf3',
          100: '#fcf5e1',
          200: '#f9ecc8',
          300: '#f4e38b',
          400: '#f4dd62',
          500: '#dab84c',
          600: '#c4993a',
          700: '#b6862f',
          800: '#b2802c',
          900: '#8a6322',
          950: '#5c4217',
        },
        // Sekundär: Dunkles Blau-Grau (Logo-Hintergrund)
        dark: {
          50: '#f4f4f6',
          100: '#e4e5e9',
          200: '#c9cbd3',
          300: '#a3a7b3',
          400: '#7d8291',
          500: '#5c6173',
          600: '#494d5c',
          700: '#3d404d',
          800: '#20222b',
          900: '#191b24',
          950: '#11121b',
        },
        // Beige für Hintergründe (warm, passend zu Gold)
        sand: {
          50: '#fdfcfa',
          100: '#f9f6f1',
          200: '#f3ede3',
          300: '#e9e0d0',
          400: '#dcceb6',
          500: '#cdb99b',
          600: '#bea283',
          700: '#a98a6c',
          800: '#8c725b',
          900: '#735f4c',
          950: '#3d3127',
        },
        // Aliase für Rückwärtskompatibilität
        cocoa: {
          50: '#fefbf3',
          100: '#fcf5e1',
          200: '#f9ecc8',
          300: '#f4e38b',
          400: '#f4dd62',
          500: '#dab84c',
          600: '#c4993a',
          700: '#b6862f',
          800: '#b2802c',
          900: '#8a6322',
          950: '#5c4217',
        },
        navy: {
          50: '#f4f4f6',
          100: '#e4e5e9',
          200: '#c9cbd3',
          300: '#a3a7b3',
          400: '#7d8291',
          500: '#5c6173',
          600: '#494d5c',
          700: '#3d404d',
          800: '#20222b',
          900: '#191b24',
          950: '#11121b',
        },
        // Standard Colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
