module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', 'src/**/*.tsx', 'src/**/**/**/**/*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended'],
};
