import { defineConfig } from 'dumi'
import path from 'path'

const repo = 'hard-ui'

export default defineConfig({
	title: repo,
	outputPath: 'docs-dist',
	base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
	publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
	themeConfig: {
		name: 'hard-ui',
		nav: [{ title: '介绍', link: '/guide' }]
	},
	alias: {
		'@hard-ui': path.join(__dirname, 'packages'),
		'hard-ui': path.join(__dirname, 'packages/hard-ui/components')
	},
	resolve: {
		atomDirs: [
			{
				type: 'components',
				dir: './packages/hard-ui/components'
			}
		]
		// 配置入口文件路径，API 解析将从这里开始
		// entryFile: './packages/hard-ui/components/index.ts'
	}
	// apiParser: {}
})
