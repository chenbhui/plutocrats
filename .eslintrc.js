module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        //这里是添加的代码
        //关闭某文件命名规则校验
        {
            files: ['src/views/index.vue', 'src/views/**/index.vue', 'src/components/**/**.vue', 'src/custom-component/**/**.vue'],   // 匹配views和二级目录中的**.vue
            rules: {
                'vue/multi-word-component-names': "off",
            } //给上面匹配的文件指定规则
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}

