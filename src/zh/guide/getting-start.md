---
sidebarDepth: 3
---


# 快速上手

## 安装

### 兼容性

NetV 不支持 IE，但支持所有[兼容 ECMAScript 5 的浏览器](https://caniuse.com/es5)，同时，NetV 需要浏览器支持 [WebGL2](https://get.webgl.org/webgl2/)。

### 更新日志

最新稳定版本：1.1.1

每个版本的更新日志见 [GitHub](https://github.com/ZJUVAG/NetV.js/releases)。

### `<script>`

直接下载并用`<script>` 标签引用, `NetV`会注册为一个全局`Class`.
可以从GitHub中下载: [GitHub Releases](https://github.com/ZJUVAG/NetV.js/releases).



:::tip
* `NetV.js`: 开发版本，源码保持可读性，包含所有警告
* `NetV.min.js`: 生产版本，代码进行了压缩，减少了警告
:::


### CDN

引用最新版本：

```html
<script src="https://unpkg.com/netv/build/NetV.js"></script>
```

在生产环境，推荐使用特定版本以避免新版本变更之后造成不可预期的破坏：
```html
<script src="https://unpkg.com/netv@1.1.1/build/NetV.min.js"></script>
```
### NPM

在用`NetV`构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。

```shell
$ npm install netv
```

安装之后，可以通过对应的引用语法引入，如：

```js
import NetV from 'netv'
```

## 使用

`NetV`的使用相对简单，我们通过用`NetV`绘制一个简单的图进行说明。

### 1. 创建实体

`NetV`需要一个`<div>`元素作为绘制的画布：

```js
const div = document.getElementById('main')
const netv = new NetV({ container: div })
```

如此便创建了`NetV`对象，`NetV`后续的大部分操作均是调用`netv`的成员函数。

### 2. 添加数据

`NetV`支持添加常见的json类型图数据，也可以用`addNode()`, `addLink()`等调用接口：

```js
netV.data({
    nodes: [
        { id: '0', x: 300, y: 100 },
        { id: '1', x: 500, y: 100 },
        { id: '2', x: 400, y: 400 }
    ],
    links: [
        { source: '0', target: '2' },
        { source: '1', target: '2' }
    ]
})
```

### 3. 绘制

`NetV`要求每次对其进行修改后，都需要调用`draw()`函数更新画布，因此：

```js
netv.draw()
```

经过上述三个步骤，绘制的效果如下图所示：

<img :src="$withBase('/basic-tutorial-graph.png')" alt="basic tutorial graph">


上述例子可以在 [CodeSandbox](https://codesandbox.io/s/netv-example-basic-8v1lj) 中在线体验。

## 更多

### 样例

`NetV`提供了多个不同的实例用于展示其丰富的功能，请参照 [所有样例](http://netv.zjuvag.org/zh/component/)

### API文档
如果需要了解`NetV`中对应函数的使用，请参阅 [API文档](http://netv.zjuvag.org/zh/API/)

### 项目源代码

`NetV`的源代码托管在 [GitHub](https://github.com/ZJUVAG/NetV.js) 上，欢迎star，issue，pull request.