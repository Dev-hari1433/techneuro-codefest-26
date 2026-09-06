/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          950: '#120A05',
          900: '#1A120B',
          850: '#231710',
          800: '#2D1E16',
          700: '#3D281D',
          600: '#563829',
        },
        oat: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F3EDE2',
          300: '#E9DEC9',
          400: '#D5C4A3',
        },
        copper: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        },
        electric: {
          cyan: '#00F5FF',
          violet: '#8A2BE2',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-copper': '0 0 25px -5px rgba(217, 119, 6, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(0, 245, 255, 0.35)',
        'luxury': '0 20px 40px -15px rgba(26, 18, 11, 0.12)',
      }
    },
  },
  plugins: [],
}
