/* eslint-disable */
const path = require('path')

module.exports = {
  plugins: {
    'postcss-jit-props': {
      files: [
        path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),
      ],
    },
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
