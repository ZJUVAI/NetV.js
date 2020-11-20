
# NetV.js

本分支专为巫英才/陈为老师的可视化课程的课程作业提供。



## 安装使用

准备工作：安装[`git`](https://git-scm.com/)和[`Node.js`](https://nodejs.org/zh-cn/)。

本项目的安装和启动方法：

```bash
git clone https://github.com/ZJUVAG/NetV.js.git
cd NetV.js
npm install
npm run build # or: npm run watch
```

之后你可以打开`examples`文件夹下的预览功能。

基础用法

```js
const testData = {
    nodes: [
        { id: '0', x: 300, y: 100 },
        { id: '1', x: 500, y: 100 },
        { id: '2', x: 400, y: 400 }
    ],
    links: [
        { source: '0', target: '2' },
        { source: '1', target: '2' }
    ]
}

const netv = new NetV({
    container: document.getElementById('main')
})
netv.data(testData)
netv.draw()

```



## 贡献

可以随时向我们提issuse或者提交贡献代码，具体细节可以查看 [开发指南](https://github.com/ZJUVAG/NetV.js/blob/dev/docs/development-guide-chinese.md).

