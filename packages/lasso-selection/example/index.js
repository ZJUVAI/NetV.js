/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description lasso operation
 */
const netv = new NetV({
    container: document.getElementById('main'),
    link: {
        style: {
            strokeWidth: 1
        }
    }
})
const data = NetV.Utils.transformGraphPosition(netv.loadDataset('miserables'), 500, 400, 300)
const colorMap = [
    { r: 166, g: 206, b: 227, a: 0.9 },
    { r: 178, g: 223, b: 138, a: 0.9 },
    { r: 31, g: 120, b: 180, a: 0.9 },
    { r: 51, g: 160, b: 44, a: 0.9 },
    { r: 251, g: 154, b: 153, a: 0.9 },
    { r: 227, g: 26, b: 28, a: 0.9 },
    { r: 253, g: 191, b: 111, a: 0.9 },
    { r: 255, g: 127, b: 0, a: 0.9 },
    { r: 202, g: 178, b: 214, a: 0.9 },
    { r: 106, g: 61, b: 154, a: 0.9 },
    { r: 255, g: 255, b: 153, a: 0.9 },
    { r: 177, g: 89, b: 40, a: 0.9 }
]
data.nodes.forEach((node) => {
    const { r, g, b, a } = colorMap[node.group]
    node.style = {
        fill: { r: r / 255, g: g / 255, b: b / 255, a }
    }
})
netv.data(data)
netv.draw()

netv.on('pan', () => { })
netv.on('zoom', () => { })

const lasso = new Lasso(netv, {
    enable: true,
    multiSelectKey: 'Shift',
    pathStyle: {
        'stroke-dasharray': [5, 5],
    }
})
lasso.onSelected((selectedItems) => {
    console.log(selectedItems)
})