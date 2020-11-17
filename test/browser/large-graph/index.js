/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description draw large graph
 */
const netv = new NetV({
    container: document.getElementById('main'),
    width: 1000,
    height: 1000,
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.5 },
        r: 1,
        strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.2 },
        strokeWidth: 1
    }
})

fetch('../data/bcsstk31.txt.json')
    // fetch('../data/3elt.txt.json')
    // fetch('../data/fin512.json')
    .then((res) => res.json())
    .then((json) => {
        const data = NetV.Utils.transformGraphPosition(json, 1000, 500, 500)
        netv.data(data)
        netv.draw()
    })
