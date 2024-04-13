module.exports = {
  env: {
    node: true, // This is important if you're using Node.js
    browser: true,
    es2021: true,
  },
  globals: {
    module: 'readonly', // Add 'module' to the list of global variables
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Add other ESLint configurations as needed
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Add ESLint rules as needed
  },
};