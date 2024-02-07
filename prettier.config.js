const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  "arrowParens": "avoid",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 4,
  "trailingComma": "none",
  "semi": true,
  "proseWrap": "always",
  "printWidth": 70,
  "plugins": [
      "prettier-plugin-tailwindcss"
  ]
}
