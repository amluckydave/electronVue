/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    env: {
        'vue/setup-compiler-macros': true,
        'node': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        // 使用来自@typescript-eslint/eslint-plugin的推荐规则
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
    root: true,
    parser: '@typescript-eslint/parser',
    rules: {
        'enabled': false,
        'no-unused-vars': 1,
        'indent': 'off',
        'linebreak-style': ['warn', 'windows'],
        'max-len': ['warn', 120],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_$'
            }
        ],
        '@typescript-eslint/triple-slash-reference': 'off'
    }
}
