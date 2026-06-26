/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#FFEFF0',
        cream: '#EED9C4',
        sand: '#D9B99F',
        mist: '#E8E5E5',
        silver: '#D9D9D9',
        ink: '#1A1A1A',
        navy: '#133951',
        teal: '#0E6973',
        sage: '#A2C4AB',
        'sage-soft': '#BAD9CE',
        aqua: '#BAE0DA',
        cobalt: '#032986',
        cyan: '#59CCD9',
        coral: '#F2AEB4',
        terracotta: '#C9766A',
        gold: '#F8D152',
        amber: '#F0BF48',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        label: '0.32em',
      },
      maxWidth: {
        editorial: '1240px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
