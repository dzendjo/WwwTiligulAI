/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand — pulled from the Tiligul Club logo.
        teal: {
          50: '#EAF2F3',
          100: '#CCDEE1',
          200: '#9BBEC4',
          300: '#699EA7',
          400: '#377E8A',
          500: '#0E5C6B', // primary — deep teal from logo
          600: '#0B4E5B',
          700: '#093F4A',
          800: '#062F38',
          900: '#031F26',
        },
        sand: {
          50: '#FBF7EE',
          100: '#F8F1E2',
          200: '#F2E6D0', // base warm sand
          300: '#E8D6B5',
          400: '#D8BF8E',
          500: '#C5A567',
          600: '#A3854A',
          700: '#7A6336',
          800: '#544324',
          900: '#322813',
        },
        coral: {
          50: '#FDEBE4',
          100: '#FBD3C2',
          200: '#F6A78A',
          300: '#F08560',
          400: '#EB6E45',
          500: '#E55F36', // primary CTA — coral sun
          600: '#C04A24',
          700: '#923719',
          800: '#642510',
          900: '#371407',
        },
        ink: {
          DEFAULT: '#0A2A30',
          soft: '#1E3A40',
          muted: '#506065',
        },
      },
      fontFamily: {
        // Distinctive characterful display + refined readable body.
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Wordmark font: geometric sans matching the brand mark.
        wordmark: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
      },
      maxWidth: {
        prose: '68ch',
        container: '1280px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(9, 63, 74, 0.18)',
        cardHover: '0 20px 50px -16px rgba(9, 63, 74, 0.28)',
      },
      backgroundImage: {
        'sand-gradient': 'linear-gradient(180deg, #FBF7EE 0%, #F2E6D0 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #E55F36 0%, #F08560 60%, #F2E6D0 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'kite-sway': {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-6px,0) rotate(1.5deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'kite-sway': 'kite-sway 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
