import { defineConfig } from 'dumi'
import path from 'path'

export default defineConfig({
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'element-plus-react',
		nav: [{ title: '介绍', link: '/guide' }]
	},
	alias: {
		'@element-plus-react': path.join(__dirname, 'packages')
	},
	resolve: {
		atomDirs: [
			{
				type: 'components',
				dir: './packages/element-plus-react/components'
			}
		]
	}
})
