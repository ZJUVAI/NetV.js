/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description draw large graph
 */
const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.5 },
        strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.2 },
        strokeWidth: 1
    }
})

fetch('../data/fin512.json')
    .then((res) => res.json())
    .then((json) => {
        const data = netv.Utils.transformGraphPosition(json, 600, 400, 300)
        netv.data(data)
        netv.draw()
    })
