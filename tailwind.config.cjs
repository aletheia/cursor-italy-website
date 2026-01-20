/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cursor-blue': '#007ACC',
        'milano-gradient': {
          start: '#00D4AA',
          middle: '#007ACC',
          end: '#FF6B6B',
        },
        'dark-bg': '#0D1117',
        'card-bg': '#161B22',
      },
      backgroundImage: {
        'milano-gradient':
          'linear-gradient(135deg, #00D4AA 0%, #007ACC 50%, #FF6B6B 100%)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(0, 212, 170, 0.8) 0%, rgba(0, 122, 204, 0.8) 50%, rgba(255, 107, 107, 0.8) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Consolas',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
