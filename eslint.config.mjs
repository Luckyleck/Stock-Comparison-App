import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    pluginJs.configs.recommended,
    pluginReactConfig,
    eslintConfigPrettier, // Add this line
    {
        ignores: ["node_modules/**"], // Ensure node_modules is ignored
    },
];