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

NetV.js is owned by <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zju.svg' height=18 style="display: inline; vertical-align: sub;"> [Zhejiang University](http://www.zju.edu.cn/) and <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjlab.svg' height=18 style="display: inline; vertical-align: sub;"> [Zhejiang Lab](https://www.zhejianglab.com/). The development of NetV.js is led by the <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/zjuvag.png'  height=18 style="display: inline; vertical-align: sub;"> [Visual Analytics Group of Zhejiang University](https://zjuvag.org/) and <img src='https://github.com/ZJUVAI/NetV.js/raw/dev/docs/jianwei.svg' height=18 style="display: inline; vertical-align: sub;"> [Zhejiang Lab Jianwei Team](https://jianwei.projects.zjvis.org/#/).
