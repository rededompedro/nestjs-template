module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        ShareArrayBuffer: 'readonly',
    },
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        'prettier/prettier': ['error'],
        'no-unused-vars': 'off',
        'func-names': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                js: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: {
                extensions: ['.ts', '.js'],
            },
        },
    },
};