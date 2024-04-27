import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default antfu(
  // {ignores: ['public', 'node_modules']},
  {
    ignores: [
      '.next',
      'drizzle',
      'build',
      'node_modules',
      'public',
      '.git',
      '.idea',
      '.husky',
    ],
    typescript: { tsconfigPath: 'tsconfig.json' },
    stylistic: { quotes: 'single', semi: true },
    settings: { react: { version: 'detect' } },
    // formatters: { css: true },
    react: true,
    vue: false,
  },
  ...compat.extends('airbnb/hooks'),
  ...compat.extends('plugin:tailwindcss/recommended'),
  //

  // ...compat.config({
  //   // plugins: ['import'],
  //   rules: {
  //     'import/no-unresolved': 'error',
  //   },
  //   settings: {
  //     'import/parsers': {
  //       '@typescript-eslint/parser': ['.ts', '.tsx'],
  //     },
  //     'import/resolver': {
  //       typescript: {
  //         alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

  //         // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

  //         // use <root>/path/to/folder/tsconfig.json
  //         project: './tsconfig.json',
  //       },
  //     },
  //   },
  // }),
);
