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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          nony: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        OD_RED: {
          DEFAULT: '#e06c75', // hsl(355, 65%, 65%)
          200: 'hsl(355, 20%, 80%)',
          400: 'hsl(355, 40%, 60%)',
          600: 'hsl(355, 60%, 40%)',
          800: 'hsl(355, 80%, 20%)',
        },
        OD_GREEN: {
          DEFAULT: '#98c379', // hsl(95, 38%, 62%)
          200: 'hsl(95, 20%, 80%)',
          400: 'hsl(95, 40%, 60%)',
          600: 'hsl(95, 60%, 40%)',
          800: 'hsl(95, 80%, 20%)',
        },
        OD_YELLOW: {
          DEFAULT: '#e5c07b', // hsl(39, 67%, 69%)
          200: 'hsl(39, 20%, 80%)',
          400: 'hsl(39, 40%, 60%)',
          600: 'hsl(39, 60%, 40%)',
          800: 'hsl(39, 80%, 20%)',
        },
        OD_BLUE: {
          DEFAULT: '#61afef', // hsl(207, 82%, 66%)
          200: 'hsl(207, 20%, 80%)',
          400: 'hsl(207, 40%, 60%)',
          600: 'hsl(207, 60%, 40%)',
          800: 'hsl(207, 80%, 20%)',
        },
        OD_PURPLE: {
          DEFAULT: '#c678dd', // hsl(286, 60%, 67%)
          200: 'hsl(286, 20%, 80%)',
          400: 'hsl(286, 40%, 60%)',
          600: 'hsl(286, 60%, 40%)',
          800: 'hsl(286, 80%, 20%)',
        },
        OD_PINK: {
          DEFAULT: '#f472b6', // hsl(329, 86%, 70%)
          200: 'hsl(329, 20%, 80%)',
          400: 'hsl(329, 40%, 60%)',
          600: 'hsl(329, 60%, 40%)',
          800: 'hsl(329, 80%, 20%)',
        },
        OD_CYAN: {
          DEFAULT: '#56b6c2', // hsl(187, 47%, 55%)
          200: 'hsl(187, 20%, 80%)',
          400: 'hsl(187, 40%, 60%)',
          600: 'hsl(187, 60%, 40%)',
          800: 'hsl(187, 80%, 20%)',
        },
        OD_BLACK: {
          DEFAULT: '#282c34', // hsl(220, 14%, 20%)
          100: 'hsl(220, 14%, 10%)',
          300: 'hsl(220, 14%, 30%)',
          400: 'hsl(220, 14%, 40%)',
        },
        OD_GRAY: {
          DEFAULT: '#a8afbd', // hsl(220, 14%, 70%)
          500: 'hsl(220, 14%, 50%)',
          600: 'hsl(220, 14%, 60%)',
          800: 'hsl(220, 14%, 80%)',
        },
        OD_WHITE: 'hsl(220, 14%, 90%)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
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
