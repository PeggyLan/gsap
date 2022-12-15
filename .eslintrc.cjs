/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@antfu',
    // "plugin:vue/vue3-essential",
    // "eslint:recommended",
    // "@vue/eslint-config-prettier",
    '.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
  },
}
