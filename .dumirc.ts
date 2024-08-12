import { defineConfig } from 'dumi'
import path from 'path'

export default defineConfig({
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'hard-ui',
		nav: [
			{ title: '介绍', link: '/guide' },
			{ title: '组件', link: '/components' }
		]
	},
	// 别名：dumi 2不再感知 monorepo,需要手动配置包名到 src 的 alias。
	alias: {
		'@hard-ui': path.join(__dirname, 'packages'),
		'hard-ui': path.join(__dirname, 'packages/hard-ui/components')
	},
	// apiParser: {}
	hash: true, //文档包名是否生成hash，防止浏览器缓存
	//解析目录
	resolve: {
		// docDirs: ['docs'], //配置 Markdown 文档的解析目录
		atomDirs: [
			//配置子项目（例如组件、函数、工具等）Markdown 的解析目录。
			{
				type: 'components',
				dir: './packages/hard-ui/components'
			}
		]
	}
})
