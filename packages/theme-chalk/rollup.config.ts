import { readFileSync } from 'node:fs'

import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup'
import postcss from 'rollup-plugin-postcss'

const pkg = JSON.parse(readFileSync('./package.json').toString())

export default defineConfig([
	{
		input: './src/index.scss',
		output: [
			{
				file: pkg.main,
				format: 'esm'
			}
		],
		plugins: [
			postcss({
				extract: true,
				plugins: [autoprefixer()]
			})
		]
	}
])
