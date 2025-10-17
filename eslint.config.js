import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.map(config => ({
        ...config,
        files: ['**/*.{ts,tsx}'], // We use TS config only for TS files
    })),
    {
        ignores: ['dist', '*.config.ts', 'test-setup.ts', 'coverage', 'seed.cjs'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-you-might-not-need-an-effect': reactYouMightNotNeedAnEffect,
            'react-hooks': reactHooks,
            'react-x': reactX,
            'react-dom': reactDom,
            'jsx-a11y': jsxA11y,
            'react-refresh': reactRefresh,
            prettier,
            vitest,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...reactYouMightNotNeedAnEffect.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...reactX.configs['recommended-typescript'].rules,
            ...reactDom.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...vitest.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': 'error',
            semi: ['warn', 'always'],
            'no-restricted-imports': [
                'error',
                {
                    patterns: ['../*', './*', '!./*.module.scss'],
                },
            ],
            '@typescript-eslint/no-misused-promises': 'off',
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // 1. NPM packages
                        ['^\\w', '^@\\w'],
                        // 2. Assets
                        ['^@/assets', '^@/features/[^/]+/assets'],
                        // 3. Components
                        ['^@/components', '^@/features/[^/]+/components'],
                        // 4. Constants
                        ['^@/constants', '^@/features/[^/]+/constants'],
                        // 5. Data
                        ['^@/data', '^@/features/[^/]+/data'],
                        // 6. Dictionaries
                        ['^@/dictionaries', '^@/features/[^/]+/dictionaries'],
                        // 7. Hooks
                        ['^@/hooks', '^@/features/[^/]+/hooks'],
                        // 8. Layouts
                        ['^@/layouts', '^@/features/[^/]+/layouts'],
                        // 9. Lib
                        ['^@/lib', '^@/features/[^/]+/lib'],
                        // 10. Models
                        ['^@/models', '^@/features/[^/]+/models'],
                        // 11. Mutations
                        ['^@/mutations', '^@/features/[^/]+/mutations'],
                        // 12. Queries
                        ['^@/queries', '^@/features/[^/]+/queries'],
                        // 13. Routes
                        ['^@/routes', '^@/features/[^/]+/routes'],
                        // 14. Store
                        ['^@/store', '^@/features/[^/]+/store'],
                        // 15. Utils
                        ['^@/utils', '^@/features/[^/]+/utils'],
                        // 16. SCSS modules
                        ['^.+\\.module\\.scss$'],
                    ],
                },
            ],
        },
    },
];
