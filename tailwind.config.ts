import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#15110E', soft: '#2A231E' },
        stone: { DEFAULT: '#E8DFD0', deep: '#D9CDB9' },
        bone: '#F6F1E8',
        coral: { DEFAULT: '#B3302A', deep: '#8E2420', light: '#D9574F' },
        cognac: { DEFAULT: '#8A4F2C', light: '#B07A52' },
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      letterSpacing: { wider2: '0.25em', widest2: '0.4em' },
    },
  },
  plugins: [],
};
export default config;
