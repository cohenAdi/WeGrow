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
          50:  '#F0FAF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          green:  '#2D6A4F',
          forest: '#1B4332',
          sage:   '#52B788',
          mint:   '#95D5B2',
          pale:   '#D8F3DC',
        },
        warm: {
          amber:      '#F4A261',
          peach:      '#FDDCB5',
          cream:      '#FFFBF5',
          sand:       '#F5F0E8',
          terracotta: '#E07A5F',
          rose:       '#F2A49A',
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
        'hero-gradient':      'linear-gradient(135deg, #E8F5E0 0%, #F0FAF4 50%, #FFF8ED 100%)',
        'cta-gradient':       'linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%)',
        'card-gradient':      'linear-gradient(135deg, #ffffff 0%, #F0FAF4 100%)',
      },
      boxShadow: {
        'brand-sm':  '0 2px 8px rgba(45,106,79,0.12)',
        'brand-md':  '0 4px 20px rgba(45,106,79,0.18)',
        'brand-lg':  '0 8px 40px rgba(45,106,79,0.22)',
        'warm-sm':   '0 2px 8px rgba(244,162,97,0.2)',
        'warm-md':   '0 4px 20px rgba(244,162,97,0.25)',
        'card':      '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
