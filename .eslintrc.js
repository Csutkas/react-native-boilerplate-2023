module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      plugins: ['anti-trojan-source', 'simple-import-sort'],
      extends: ['@react-native-community', 'plugin:prettier/recommended'],
      rules: {
        // Inherited from react-native-template-typescript
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        // Additional plugins
        'anti-trojan-source/no-bidi': 'error',
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 0,
        'prettier/prettier': 'error',
        // Customized
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/dot-notation': 'off',
        'max-len': [
          'error',
          {
            ignorePattern: '^import |^export \\{(.*)?\\}',
            code: 140,
          },
        ],
        'no-duplicate-imports': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'error',
          {
            ignore: [-1, 0, 1, 60, 3600, 100, 1000],
            enforceConst: false,
            ignoreDefaultValues: true,
            detectObjects: false,
            ignoreArrayIndexes: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
          },
        ],
        'no-template-curly-in-string': 'error',
        'no-underscore-dangle': 'off',
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['enum', 'enumMember'],
            format: ['StrictPascalCase'],
          },
        ],
      },
    },
  ],
};
