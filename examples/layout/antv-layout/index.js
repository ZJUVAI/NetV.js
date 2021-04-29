const netv = new NetV({
    container: document.getElementById('main'),
    node: {
        style: {
            r: 8
        }
    },
    link: {
        style: {
            strokeWidth: 1
        }
    }
})

const width = 800
const height = 600
let data = netv.loadDataset('miserables')
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
    node.style = { fill: { r: r / 255, g: g / 255, b: b / 255, a } }
})
data.edges = data.links

// const myLayout = new layout.GridLayout({
//     type: 'grid',
//     width,
//     height,
//     rows: 4,
//     cols: 4
// })
// const newModel = myLayout.layout(data)

const myLayout = new layout.MDSLayout({
    type: 'mds',
    workerEnabled: true
})
const newModel = myLayout.layout(data)
const { nodes } = NetV.Utils.transformGraphPosition(
    { nodes: newModel.nodes },
    500,
    width / 2,
    height / 2
)
data.nodes = nodes
netv.data(data)
netv.draw()
