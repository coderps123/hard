import { defineConfig } from 'dumi'

export default defineConfig({
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'element-plus-react',
		nav: [{ title: '介绍', link: '/guide' }]
	},
	resolve: {
		atomDirs: [{ type: 'components', dir: './src/components' }]
	}
})
