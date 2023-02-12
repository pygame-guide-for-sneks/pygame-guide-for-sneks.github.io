let tailwindcss = require('tailwindcss');

module.exports = {
    parser: 'postcss-scss',
    plugins: [
      tailwindcss('./tailwind.config.js'),
      require('tailwindcss'),
      require('autoprefixer'),
      ...(process.env.JEKYLL_ENV == "production"
        ? [require('cssnano')({ preset: 'default' })]
        : [])
    ]
  };