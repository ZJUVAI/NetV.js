// import sidebar from sidebar
module.exports = {
	title: 'NetV.js',
	description:
		'A High Performance Network Visualization JavaScript Library based on WebGL',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
	],
	cache: false,
	base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
	plugins: [
		'vuepress-plugin-smooth-scroll',
		'@vuepress/active-header-links',
		'@vuepress/nprogress',
	],
	themeConfig: {
		smoothScroll: true,
		nav: [
			{ text: '首页', link: '/home/' }, // 内部链接 以docs为根目录
			{ text: '指南', link: '/guide/' }, // 外部链接
			{ text: 'API', link: '/API/' }, // 外部链接
			{ text: 'Demo', link: '/component/' }, // 外部链接
			// 下拉列表
			{
				text: '资源链接',
				items: [
					{ text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
					{
						text: '实验室',
						link: 'https://zjuvag.org/',
					},
				],
			},
		],
		sidebar: {
			'/home/': [''],
			'/guide/': [
				'',
				'getting-start',
				'development-guide',
				'development-guide-chinese',
			],
			'/API/': [''],
			'/component/': ['', 'API'],
		},
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	},
	markdown: {
		extractHeaders: ['h2', 'h3', 'h4'],
	},
	// markdown:{
	//     extendMarkdown: md => {
	//         // 使用更多的 markdown-it 插件!
	//         md.use(require('markdown-it-xxx'))
	//     }
	// }
}
