/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description landing page
 */

const configs = {
    container: document.getElementById('main'),
    width: 1920,
    height: 1080,
    nodeLimit: 1e5,
    linkLimit: 1e7,
    backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
    node: {
        strokeWidth: 0,
        fill: { r: 0, g: 0.3, b: 0.7, a: 1 }
    }
}

const data = {
    nodes: [],
    links: []
}

// random generate nodes

data.nodes = Array(1000)
    .fill()
    .map((x, i) => {
        return {
            id: String(i),
            x: Math.random() * configs.width,
            y: Math.random() * configs.height,
            r: Math.random() * 5
        }
    })

const netv = new NetV(configs)
netv.data(data)
netv.draw()
