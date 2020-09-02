# NetV.js

A large scale network visualization engine based on WebGL.

Homepage: https://zjuvag.org/netv.js/

## Features

* GPU-accelerated render large-scale graphs (millons of elements)
* High FPS for dynamic rendering graphs
* Fast WebGL-based mouse interaction on graphs

## Usage

Download NetV.js from releases: https://github.com/ZJUVAG/NetV.js/releases

Or import from CDN: https://unpkg.com/netv@1.0.1/build/NetV.js 

If you use npm, you can also install netv:

```bash
npm install netv
```

Basic example shows below:

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

## Contribution

Feel freely submitting issues and pull requests. You may check our [contribution guide](https://github.com/ZJUVAG/NetV.js/blob/dev/docs/development-guide.md).


# NetV.js

基于WebGL的大规模图可视化引擎

主页: https://zjuvag.org/netv.js/

## 特性

* GPU加速的大规模图数据渲染(支持千万级元素)
* 高性能FPS实时渲染
* 基于WebGl的快速交互响应

## 使用

下载 NetV.js 的地址: https://github.com/ZJUVAG/NetV.js/releases

或者从CDN引入: https://unpkg.com/netv@1.0.1/build/NetV.js 

NPM安装：

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


## 贡献

可以随时向我们提issuse或者提交贡献代码，具体细节可以查看 [开发指南](https://github.com/ZJUVAG/NetV.js/blob/dev/docs/development-guide-chinese.md).

