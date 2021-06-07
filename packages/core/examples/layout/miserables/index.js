const netv = new NetV({
    container: document.getElementById('main'),
    node: {
        style: {
            r: 8,
        }
    },
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
    node.style = { fill: { r: r / 255, g: g / 255, b: b / 255, a } }
    // NOTE: build-in dataset contains position, random it
    node.x = Math.random() * 500 + 150 // scale and offset to center
    node.y = Math.random() * 500
})
netv.data(data)

const width = 800
const height = 600

const simulation = d3
    .forceSimulation(data.nodes)
    .force(
        'link',
        d3.forceLink(data.links).id((d) => d.id)
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))

simulation.on('tick', () => {
    data.nodes.forEach((n) => {
        const node = netv.getNodeById(n.id)
        node.x(n.x)
        node.y(n.y)
    })

    netv.draw()
})
