module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    '.next',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'next.config.js',
    'postcss.config.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        semi: false,
        endOfLine: "auto",
        plugins: ['prettier-plugin-tailwindcss'],
      }
    ],
  },
}
