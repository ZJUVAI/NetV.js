/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description using d3-force to layout and using NetV to draw
 */
const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        strokeWidth: 0
    },
    link: {
        strokeWidth: 0.5
    }
})
const data = netv.Utils.transformGraphPosition(netv.loadDataset('patents'), 500, 400, 300)
const colorMap = {
    patent: { r: 102, g: 194, b: 165, a: 1 },
    inventor: { r: 252, g: 141, b: 98, a: 1 },
    assignee: { r: 141, g: 160, b: 203, a: 1 }
}
const radius = (x) => {
    const transformer = (n, k) => 0.5 * Math.max(3, k * n ** 0.5)
    switch (x.type) {
        case 'patent':
            return transformer(x.numCitations, 0.15)
        case 'inventor':
            return transformer(x.numPatents, 0.3)
        case 'assignee':
            return transformer(x.numPatents, 0.1)
    }
}
data.nodes.forEach((node) => {
    const { r, g, b, a } = colorMap[node.type]
    node.fill = { r: r / 255, g: g / 255, b: b / 255, a }
    node.r = radius(node)
    // NOTE: build-in dataset contains position, random it
    node.x = Math.random() * 500 + 150 // scale and offset to center
    node.y = Math.random() * 500 + 50
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
    .force(
        'collide',
        d3.forceCollide((d) => {
            return 2.4 * radius(d)
        })
    )
    .force(
        'charge',
        d3.forceManyBody((d) => {
            const factor = -100
            const transformer = (x, k = 0.1) => Math.max(4, k * x ** 2)
            if (d.type === 'patent') return factor * transformer(d.numCitations, 0.15)
            if (d.type === 'inventor') return factor * transformer(d.numPatents, 0.3)
            if (d.type === 'assignee') return factor * transformer(d.numPatents)
        })
    )
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('x', d3.forceX(width / 2).strength(0.13))
    .force('y', d3.forceY(height / 2).strength(0.13))

simulation.on('tick', () => {
    data.nodes.forEach((n) => {
        const node = netv.getNodeById(n.id)
        node.x(n.x)
        node.y(n.y)
    })

    netv.draw()
})

netv.draw()
