import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import ts from 'typescript-eslint'

// Explicitly import process from Bun
const process = globalThis.process ?? { cwd: () => '.' }

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  // Disables conflicting ESLint rules
  prettierConfig,
  // enforce naming conventions for files and folders (kebab-case)
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx}': 'KEBAB_CASE',
          '**/*.{js,ts}': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          '*': 'KEBAB_CASE',
        },
      ],
    },
  },
  // Enforce TypeScript-specific rules
  {
    ignores: ['node_modules', 'dist', 'coverage', 'eslint.config.mjs'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      import: importPlugin,
      prettier,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
          moduleDirectory: ['apps/**/*', 'libs/**/*', 'node_modules'],
        },
      },
    },
    rules: {
      'import/no-extraneous-dependencies': 'error',
      'import/no-cycle': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'prettier/prettier': 'error', // Enforce Prettier formatting
      'import/no-unresolved': ['error', { ignore: ['^bun(:\\w+)?$'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
)
