import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import strip from '@rollup/plugin-strip'

export default defineConfig({
	input: 'src/index.ts',
	output: [
		{
			dir: 'dist',
			format: 'esm',
			exports: 'named', // 指定导出模式（自动、默认、命名、无）
      sourcemap: true,
			preserveModules: true, // 保留模块结构
			preserveModulesRoot: 'src' // 将保留的模块放在根级别的此路径下
		},
	],
	external: ['react'],
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		postcss({
			extract: true,
			plugins: [autoprefixer()]
		}),
		strip()
	]
})
