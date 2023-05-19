module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    //
    colors: {
      'blue': '#3b82f6',
      'purple': '#a855f7',
      'pink': '#d946ef',
      'red': '#f43f5e',
      'green': '#a3e635',
      'yellow': '#fde047',
      'black': '#0a0a0a',
      'white': '#fafafa',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}