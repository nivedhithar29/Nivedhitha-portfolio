/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // NIRANULA editorial palette (redesign brief v3.1)
        // blush ground · charcoal ink · antique gold accent · wordmark navy
        // The hero keeps its sunrise gradient; these govern everything else.
        shell: '#FFEFF0', // blush background
        blush: '#FFEFF0',
        'blush-deep': '#F9E2E4',
        paper: '#FFF7F4',
        ink: '#1C1917', // near-black, warm undertone
        grey: '#6B6560', // warm secondary text
        gold: '#C8A97E', // warm sand / antique gold
        'gold-deep': '#8F6B3F', // gold dark enough for text on blush
        navy: '#1C2B5E', // NIRANULA wordmark navy

        // sunrise tones, hero + wave band only
        coral: '#F89128',
        cream: '#FACB73',
        sea: '#577A9A',
        'sea-deep': '#06346F',

        // legacy aliases kept so no stray class silently breaks
        teal: '#6B6560',
        sage: '#C8A97E',
        'sage-soft': '#E0CFAD',
        aqua: '#AAC4DA',
        cobalt: '#1C2B5E',
        cyan: '#C8A97E',
        terracotta: '#8F6B3F',
        amber: '#8F6B3F',
        mist: '#F9E2E4',
        silver: '#DED3C2',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        label: '0.32em',
        wordmark: '0.24em',
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
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 56s linear infinite',
        'marquee-reverse': 'marquee-reverse 46s linear infinite',
      },
    },
  },
  plugins: [],
};
