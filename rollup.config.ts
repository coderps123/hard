import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
		}
	],
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		postcss({
			extract: true,
			plugins: [autoprefixer()]
		}),
		strip(),
		alias({
			entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
		}),
		peerDepsExternal()
	]
})
