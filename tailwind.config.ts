import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F0F2E8',
          100: '#E2E8D0',
          200: '#C8D4A8',
          300: '#AABB80',
          400: '#8A9B60',
          500: '#6E7D48',
          600: '#5C6B38',
          700: '#4A5530',
          800: '#3D4728',
          900: '#2E3620',
          green:  '#5C6B38',
          forest: '#3D4728',
          sage:   '#8A9B68',
          mint:   '#C2D0A0',
          pale:   '#E5EDD5',
        },
        warm: {
          amber:      '#C07850',
          peach:      '#F2DDD0',
          cream:      '#F5EDE4',
          sand:       '#EEE6DC',
          terracotta: '#B8714A',
          rose:       '#D4906A',
        },
      },
      fontFamily: {
        sans:  ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'Rubik', 'sans-serif'],
      },
      animation: {
        float:          'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        blob:           'blob 7s infinite',
        'blob-delayed': 'blob 9s 2s infinite',
        'fade-up':      'fadeUp 0.7s ease-out forwards',
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        shimmer:        'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px,   0px)   scale(1)' },
          '33%':  { transform: 'translate(30px, -50px)  scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px)  scale(0.9)' },
          '100%': { transform: 'translate(0px,   0px)   scale(1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial':    'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':      'linear-gradient(135deg, #EEE6DC 0%, #F5EDE4 50%, #F0EEE4 100%)',
        'cta-gradient':       'linear-gradient(135deg, #3D4728 0%, #5C6B38 60%, #8A9B68 100%)',
        'card-gradient':      'linear-gradient(135deg, #ffffff 0%, #F0F2E8 100%)',
      },
      boxShadow: {
        'brand-sm':  '0 2px 8px rgba(92,107,56,0.12)',
        'brand-md':  '0 4px 20px rgba(92,107,56,0.18)',
        'brand-lg':  '0 8px 40px rgba(92,107,56,0.22)',
        'warm-sm':   '0 2px 8px rgba(184,113,74,0.2)',
        'warm-md':   '0 4px 20px rgba(184,113,74,0.25)',
        'card':      '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
