/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './test-setup.ts',
        coverage: {
            exclude: [
                // vitest default
                'coverage/**',
                'dist/**',
                '**/node_modules/**',
                '**/[.]**',
                'packages/*/test?(s)/**',
                '**/*.d.ts',
                '**/virtual:*',
                '**/__x00__*',
                '**/\x00*',
                'cypress/**',
                'test?(s)/**',
                'test?(-*).?(c|m)[jt]s?(x)',
                '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
                '**/__tests__/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
                '**/vitest.{workspace,projects}.[jt]s?(on)',
                '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
                // custom
                '*.config.*',
                'src/main.tsx',
                '**/constants.ts',
            ],
        },
    },
});
