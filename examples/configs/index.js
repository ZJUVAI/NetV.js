/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description configuration example, show global and local configuration
 */

const testData = {
    nodes: [
        {
            id: '0',
            x: 300,
            y: 100,
            fill: { r: 1, g: 0, b: 0, a: 1 },
            strokeColor: { r: 0, g: 1, b: 1, a: 0.3 }
        },
        {
            id: '1',
            x: 500,
            y: 100,
            fill: { r: 0, g: 1, b: 0, a: 1 },
            strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
        },
        {
            id: '2',
            x: 400,
            y: 400,
            fill: { r: 0, g: 0, b: 1, a: 1 },
            strokeColor: { r: 1, g: 1, b: 0, a: 0.3 }
        }
    ],
    links: [
        {
            source: '0',
            target: '2',
            strokeWidth: 4
        },
        {
            source: '1',
            target: '2',
            strokeWidth: 4
        }
    ]
}

const configs = {
    container: document.getElementById('main'),
    node: {
        r: 10,
        fill: { r: 1, g: 0, b: 0, a: 0.8 }
    },
    width: 800,
    height: 600,
    backgroundColor: { r: 0.95, g: 0.98, b: 0.98, a: 1 },
    nodeLimit: 1000
}
const netv = new NetV(configs)

netv.data(testData)
netv.draw()
