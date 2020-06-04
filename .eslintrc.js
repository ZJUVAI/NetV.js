module.exports = {
    extends: ['alloy'],
    env: {
        // Your environments (which contains several predefined global variables)
        //
        browser: true,
        es6: true,
        jest: true
        // node: true,
        // mocha: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: ['alloy', 'alloy/typescript'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint/eslint-plugin'],
            rules: {
                'max-params': ['error', 4]
            }
        },
        {
            files: ['**/*.js'],
            extends: ['alloy'],
            parser: 'babel-eslint'
        }
    ]
}
