import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import vitest from 'eslint-plugin-vitest';

export default tseslint.config(
    { ignores: ['dist', '*.config.ts', 'test-setup.ts', 'coverage'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react-x': reactX,
            'react-dom': reactDom,
            prettier,
            'jsx-a11y': jsxA11y,
            vitest,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...reactX.configs['recommended-typescript'].rules,
            ...reactDom.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...vitest.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': 'error',
            semi: ['warn', 'always'],
        },
    },
);
