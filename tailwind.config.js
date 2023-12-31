/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        logo: "url('../public/img/logo/dv_stash_logo_white.png')",
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        OD_RED: {
          DEFAULT: 'hsl(355, 65%, 65%)',
          200: 'hsl(355, 20%, 80%)',
          400: 'hsl(355, 40%, 60%)',
          600: 'hsl(355, 60%, 40%)',
          800: 'hsl(355, 80%, 20%)',
        },
        OD_GREEN: {
          DEFAULT: 'hsl(95, 38%, 62%)',
          200: 'hsl(95, 20%, 80%)',
          400: 'hsl(95, 40%, 60%)',
          600: 'hsl(95, 60%, 40%)',
          800: 'hsl(95, 80%, 20%)',
        },
        OD_YELLOW: {
          DEFAULT: 'hsl(39, 67%, 69%)',
          200: 'hsl(39, 20%, 80%)',
          400: 'hsl(39, 40%, 60%)',
          600: 'hsl(39, 60%, 40%)',
          800: 'hsl(39, 80%, 20%)',
        },
        OD_BLUE: {
          DEFAULT: 'hsl(207, 82%, 66%)',
          200: 'hsl(207, 20%, 80%)',
          400: 'hsl(207, 40%, 60%)',
          600: 'hsl(207, 60%, 40%)',
          800: 'hsl(207, 80%, 20%)',
        },
        OD_PURPLE: {
          DEFAULT: 'hsl(286, 60%, 67%)',
          200: 'hsl(286, 20%, 80%)',
          400: 'hsl(286, 40%, 60%)',
          600: 'hsl(286, 60%, 40%)',
          800: 'hsl(286, 80%, 20%)',
        },
        OD_PINK: {
          DEFAULT: 'hsl(329, 86%, 70%)',
          200: 'hsl(329, 20%, 80%)',
          400: 'hsl(329, 40%, 60%)',
          600: 'hsl(329, 60%, 40%)',
          800: 'hsl(329, 80%, 20%)',
        },
        OD_CYAN: {
          DEFAULT: 'hsl(187, 47%, 55%)',
          200: 'hsl(187, 20%, 80%)',
          400: 'hsl(187, 40%, 60%)',
          600: 'hsl(187, 60%, 40%)',
          800: 'hsl(187, 80%, 20%)',
        },
        OD_BLACK: {
          DEFAULT: 'hsl(220, 14%, 20%)',
          100: 'hsl(220, 14%, 10%)',
          200: 'hsl(220, 14%, 12%)',
          300: 'hsl(220, 14%, 16%)',
          400: 'hsl(220, 14%, 25%)',
          600: 'hsl(220, 14%, 30%)',
          700: 'hsl(220, 14%, 35%)',
          800: 'hsl(220, 14%, 40%)',
          900: 'hsl(220, 14%, 45%)',
        },
        OD_GRAY: {
          DEFAULT: 'hsl(220, 14%, 70%)',
          100: 'hsl(220, 14%, 50%)',
          200: 'hsl(220, 14%, 55%)',
          300: 'hsl(220, 14%, 60%)',
          400: 'hsl(220, 14%, 65%)',
          600: 'hsl(220, 14%, 75%)',
          700: 'hsl(220, 14%, 80%)',
          800: 'hsl(220, 14%, 85%)',
        },
        OD_WHITE: 'hsl(220, 14%, 90%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
