# NetV.js

[中文](./README-CHINESE.md) | [English](./README.md)

基于 WebGL 的大规模图可视化引擎

主页: http://netv.zjuvag.org/

## 特性

-   GPU 加速的大规模图数据渲染(支持千万级元素)
-   高性能 FPS 实时渲染
-   基于 WebGl 的快速交互响应

## 使用

下载 NetV.js 的地址: https://github.com/ZJUVAG/NetV.js/releases

或者从 CDN 引入: https://unpkg.com/netv/build/NetV.min.js

NPM 安装：

```bash
npm install netv
```

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

## 开发指南

```bash
# 启动、为所有包安装依赖
$ npm run bootstrap

# 将某个本地的package安装为另一个package的依赖:
# 第一步：需要全局安装lerna这个库
$ npm install lerna -g
# 第二步: lerna add local-package-1-name --scope=local-package-2-name
# e.g. 将 packages/label 安装为 packages/netv 的依赖
# 它们的名字已经在他们对应的 "package.json" 中定义了
$ lerna add @netv/label --scope=netv
# 注意，只有public的包能这样使用，否则发布到npm之后会有问题

# 构建所有包
$ npm run build

# 只构建一个包，比如packages/label
$ cd ./packages/label
$ npm run watch
```

可以随时向我们提 issuse 或者提交贡献代码，具体细节可以查看 [开发指南](./docs/development-guide-chinese.md).

#### 发布

```bash
$ npm install -g lerna # 如果还没有全局安装lerna
$ lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
$ lerna publish from-git
```

## 团队

NetV.js 由 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zju.svg' height=18 style="display: inline; vertical-align: sub;"> [浙江大学](http://www.zju.edu.cn/)和 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjlab.svg' height=18 style="display: inline; vertical-align: sub;"> [之江实验室](https://www.zhejianglab.com/)所有。 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjuvag.png'  height=18 style="display: inline; vertical-align: sub;"> [浙江大学可视分析小组](https://zjuvag.org/)和 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/jianwei.svg' height=18 style="display: inline; vertical-align: sub;"> [之江实验室见微团队](https://jianwei.projects.zjvis.org/#/)的引导了相关开发。
