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