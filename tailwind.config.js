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
          'inter': ['Inter', 'sans-serif'], 
          'monsterrat': ['Montserrat', 'sans-serif'], 
        },
        backgroundImage:{
          'about-section': "url('/pubic/imgs/gradient.png')",
          'footer-texture': "url('/src/assets/footer-texture.svg')",
        }
      }
    },
  },
  plugins: [],
};