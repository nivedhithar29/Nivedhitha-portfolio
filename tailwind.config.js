/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sunrise-on-the-beach palette
        // #f89128 sun · #facb73 glow · #cfb793 sand · #577a9a sea · #06346f deep
        shell: '#FFF6EC',
        cream: '#FACB73',
        sand: '#CFB793',
        mist: '#F0E7D8',
        silver: '#DED3C2',
        ink: '#243B53',
        navy: '#06346F',
        teal: '#577A9A',
        sage: '#CFB793',
        'sage-soft': '#E0CFAD',
        aqua: '#AAC4DA',
        cobalt: '#06346F',
        cyan: '#FACB73',
        coral: '#F89128',
        terracotta: '#F89128',
        gold: '#FACB73',
        amber: '#F89128',
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
