module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /* "eslint:recommended", */
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    /* 'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        jsxSingleQuote: true,
      },
    ], */
    quotes: ['error', 'single'],
    'linebreak-style': 0,
    'spaced-comment': ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': 'off',
  },
};
