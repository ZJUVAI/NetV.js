// import sidebar from sidebar
module.exports = {
    title: 'NetV.js',
    description:
        'A High Performance large-scale Network Visualization JavaScript Library based on WebGL',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['script', { src: '/NetV.js' }],
        ['link', { rel: 'icon', href: '/logo.svg' }] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // cache: false,
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        'vuepress-plugin-smooth-scroll',
        '@vuepress/active-header-links',
        '@vuepress/nprogress',
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        }
    ],
    dest: 'docs',
    locales: {
        '/': {
            lang: 'en-US'
        },
        '/zh/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        smoothScroll: true,
        locales: {
            '/': {
                selectText: '选择语言',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Guide', link: '/guide/' }, // 外部链接
                    { text: 'API', link: '/API/' }, // 外部链接
                    { text: 'Demo', link: '/component/' }, // 外部链接
                    // 下拉列表
                    {
                        text: 'Resources',
                        items: [
                            {
                                text: 'GitHub',
                                link: 'https://github.com/ZJUVAG/NetV.js'
                            },
                            {
                                text: 'ZJU-VAG-Lab',
                                link: 'https://zjuvag.org/'
                            }
                        ]
                    }
                ],
                sidebar: {
                    '/guide/': [
                        '',
                        'getting-start'
                        // 'development-guide',
                        // 'development-guide-chinese',
                    ],
                    '/API/': [''],
                    '/component/': ['']
                },
                lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: 'Languages',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用.',
                        buttonText: '刷新'
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '指南', link: '/zh/guide/' }, // 外部链接
                    { text: 'API', link: '/zh/API/' }, // 外部链接
                    { text: '样例', link: '/zh/component/' }, // 外部链接
                    // 下拉列表
                    {
                        text: '资源链接',
                        items: [
                            {
                                text: 'GitHub',
                                link: 'https://github.com/ZJUVAG/NetV.js'
                            },
                            {
                                text: '浙江大学可视分析小组',
                                link: 'https://zjuvag.org/'
                            }
                        ]
                    }
                ],
                sidebar: {
                    '/zh/guide/': [
                        '',
                        'getting-start'
                        // 'development-guide',
                        // 'development-guide-chinese',
                    ],
                    '/zh/API/': [''],
                    '/zh/component/': ['']
                },
                lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
            }
        }
    },
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5']
    }
    // markdown:{
    //     extendMarkdown: md => {
    //         // 使用更多的 markdown-it 插件!
    //         md.use(require('markdown-it-xxx'))
    //     }
    // }
}
