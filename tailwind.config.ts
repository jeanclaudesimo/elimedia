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
        // Elimedia Brand Colors
        // Primär: Seriöses, dunkles Braun (Kakao / Natur)
        cocoa: {
          50: '#faf6f3',
          100: '#f2e8e0',
          200: '#e4cfc0',
          300: '#d3b19a',
          400: '#bf8e72',
          500: '#ae7355',
          600: '#9a5f47',
          700: '#7d4b3a',
          800: '#674034',
          900: '#55372e',
          950: '#2e1b17',
        },
        // Akzent: Tiefes Blau (Zuverlässigkeit / Logistik)
        navy: {
          50: '#f0f5fa',
          100: '#dce8f3',
          200: '#c0d5e9',
          300: '#94b9da',
          400: '#6396c5',
          500: '#4079b0',
          600: '#326095',
          700: '#2a4e79',
          800: '#274365',
          900: '#253a55',
          950: '#182538',
        },
        // Beige für Hintergründe
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
