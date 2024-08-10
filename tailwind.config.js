import { fontFamily } from 'tailwindcss/defaultTheme';  
import {LeagueSpartan, Merriweather, Inconsolata} from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      extend:{
        fontFamily:{
          'sans': ['League Spartan', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
          'mono': ['Inconsolata', 'monospace'],
        }
      }
    },
  },
  plugins: [],
};