import { readFileSync } from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pkg = JSON.parse(readFileSync('./package.json').toString())

export default defineConfig([
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				// exports: 'named', // 指定导出模式（自动、默认、命名、无）
				sourcemap: true
				// preserveModules: true // 保留模块结构
				// preserveModulesRoot: 'src' // 将保留的模块放在根级别的此路径下
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true
			}
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				extract: true,
				plugins: [autoprefixer()]
			}),
			strip(),
			alias({
				entries: [
					{
						find: 'element-plus-react',
						replacement: path.resolve(__dirname, 'src')
					}
				]
			}),
			peerDepsExternal()
		]
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: './dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/]
	}
])
