import babel from 'rollup-plugin-babel';

export default {
    input: 'lib/index.js',
    output: {
        name: 'vDom',
        file: 'dist/bundle.js',
        format: 'umd',
    },
    plugins:[
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
}
