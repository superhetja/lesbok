module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    root: true,
    extends: ['airbnb-base', 'airbnb-typescript/base'],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
};
