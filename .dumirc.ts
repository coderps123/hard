import { defineConfig } from 'dumi'
import path from 'path'

export default defineConfig({
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'hard-ui',
		nav: [{ title: '介绍', link: '/guide' }]
	},
	alias: {
		'@hard-ui': path.join(__dirname, 'packages')
	},
	resolve: {
		atomDirs: [
			{
				type: 'components',
				dir: './packages/hard-ui/components'
			}
		]
	}
})
