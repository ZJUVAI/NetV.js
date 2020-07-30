# NetV.js

Large-scaled network visualization engine based on WebGL.

Website: https://zjuvag.org/NetV.js/

## Features

* GPU-accelerated render large-scale graphs (millons of elements)
* High FPS for dynamic rendering graphs
* Fast WebGL-based mouse interaction on graphs

## Usage

Download NetV.js here.
Or import from CDN:
**TODO: 需要两个链接**

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