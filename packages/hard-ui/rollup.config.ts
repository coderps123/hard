import { readFileSync } from 'node:fs'
// import { dirname } from 'node:path'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup'
// import { fileURLToPath } from 'node:url'
import { dts } from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const pkg = JSON.parse(readFileSync('./package.json').toString())

export default defineConfig([
	{
		input: './index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true
			}
		],
		external: ['@hard-ui/icons', '@hard-ui/theme-chalk', 'classnames', 'react'],
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: 'tsconfig.json' }),
			postcss({
				extract: true,
				plugins: [autoprefixer()]
			}),
			strip()
		]
	},
	{
		input: 'dist/esm/types/packages/hard-ui/index.d.ts',
		output: [{ file: './dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/]
	}
])
