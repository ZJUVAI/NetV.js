# NetV.js

[中文](./README-CHINESE.md) | [English](./README.md)

A large scale network visualization engine based on WebGL.

Homepage: http://netv.zjuvag.org/

## Features

-   GPU-accelerated render large-scale graphs (millons of elements)
-   High FPS for dynamic rendering graphs
-   Fast WebGL-based mouse interaction on graphs

## Usage

Download NetV.js from releases: https://github.com/ZJUVAI/NetV.js/releases

Or import from CDN: https://unpkg.com/netv/build/NetV.min.js

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

## Develop Guide

```bash
# start and install dependencies for all packages
$ npm run bootstrap

# to add local dependences (add some local package as one dependency of another)
# first install lerna as a global package
$ npm install lerna -g
# second: lerna add local-package-1-name --scope=local-package-2-name
# e.g. add packages/label to packages/netv
# their names are defined in their corresponding "package.json"s
$ lerna add @netv/label --scope=netv
# note that only public packages can be added as local dependency,
# otherwise, problems will occur after packages are published to NPM

# build the packages
$ npm run build

# if you wanna watch one of the packages, e.g. packages/label
$ cd ./packages/label
$ npm run watch
```

Feel freely submitting issues and pull requests. You may check our [contribution guide](./docs/development-guide.md).

#### Publish

```bash
$ npm install -g lerna # if you didn't install lerna globally
$ lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
$ lerna publish from-git
```

## Team

NetV.js 归 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zju.svg' height=18 style="display: inline; vertical-align: sub;"> [浙江大学](http://www.zju.edu.cn/) 与 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjlab.svg' height=18 style="display: inline; vertical-align: sub;"> [之江实验室](https://www.zhejianglab.com/) 所有。NetV.js 的开发由 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjuvag.png'  height=18 style="display: inline; vertical-align: sub;"> [浙江大学可视分析小组](https://zjuvag.org/) 与 <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/jianwei.svg' height=18 style="display: inline; vertical-align: sub;"> [之江实验室见微团队](https://jianwei.projects.zjvis.org/#/) 主导。

贡献者：赵晓冬、潘嘉铖、韩东明、周杰辉、[朱闽峰](https://person.zju.edu.cn/minfengzhu)、陈为（现由[朱闽峰](https://person.zju.edu.cn/minfengzhu)维护）。

## License

[MIT license](./LICENSE).
