/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0F',
        surface: '#111116',
        surface2: '#17171D',
        offwhite: '#F3F3F5',
        muted: '#8B8B95',
        electric: '#3D7FFF',
        violet: '#8B5CF6',
        cyan: '#22D3EE',
        gold: '#E8B75A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at center, rgba(61,127,255,0.08) 0%, rgba(11,11,15,0) 70%)',
        'aurora': 'linear-gradient(120deg, #3D7FFF 0%, #8B5CF6 50%, #22D3EE 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(61,127,255,0.25)',
        goldGlow: '0 0 30px rgba(232,183,90,0.25)',
      },
    },
  },
  plugins: [],
};
