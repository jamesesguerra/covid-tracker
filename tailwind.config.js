module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '6rem',
        xl: '6rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
