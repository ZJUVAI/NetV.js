/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description draw large graph
 */
const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7
})

fetch('../data/fin512.json')
    .then((res) => res.json())
    .then((json) => {
        const data = netv.Utils.transformGraphPosition(json, 600, 400, 300)
        netv.data(data)
        netv.draw()
    })
