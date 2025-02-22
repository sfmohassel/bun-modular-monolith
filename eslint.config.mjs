import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import ts from 'typescript-eslint'

// Explicitly import process from Bun
const process = globalThis.process ?? { cwd: () => '.' }

export default ts.config(
  {
    ignores: [
      'node_modules',
      '**/dist/*',
      'coverage',
      'eslint.config.mjs',
      'tsconfig.json',
    ],
  },
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
          '**/*.{jsx,tsx,js,ts,json,yml,yaml}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
  // Enforce TypeScript-specific rules
  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: true,
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
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          moduleDirectory: ['apps/**/*', 'libs/**/*', 'node_modules'],
        },
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '(@\\w+\\/\\w+\\/.*)|libs\\/.*|apps\\/.*',
              message: 'Deep imports are not allowed',
            },
          ],
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'prettier/prettier': 'error', // Enforce Prettier formatting
      'import/no-relative-packages': 'error',
      'import/no-default-export': 'error',
      'import/no-named-default': 'error',
      'import/no-duplicates': 'error',
      'import/exports-last': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': ['error', { ignore: ['^bun(:\\w+)?$'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
    },
  },
)
