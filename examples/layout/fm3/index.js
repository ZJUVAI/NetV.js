const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        style: {
            fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.5 },
            r: 6,
            strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.2 },
            strokeWidth: 0
        }
    },
    link: {
        style: {
            strokeWidth: 0.5
        }
    }
})
const graph = netv.loadDataset('miserables')

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
graph.nodes.forEach((node) => {
    const { r, g, b, a } = colorMap[node.group]
    node.style = { fill: { r: r / 255, g: g / 255, b: b / 255, a } }
})

initOGDF().then(function(Module) {
    const dic = {}
    for (let i = 0; i < graph.nodes.length; ++i) {
        if (graph.nodes[i]['id'] in dic) {
            console.log('there is a bug')
        } else dic[graph.nodes[i]['id']] = i
    }
    let nodes = graph.nodes.length
    let links = graph.links.length
    let source = Module._malloc(4 * links)
    let target = Module._malloc(4 * links)
    for (let i = 0; i < links; ++i) {
        Module.HEAP32[source / 4 + i] = dic[graph.links[i].source]
        Module.HEAP32[target / 4 + i] = dic[graph.links[i].target]
    }
    let result = Module._FM3(nodes, links, source, target)

    for (let i = 0; i < nodes; ++i) {
        graph.nodes[i]['x'] = Module.HEAPF32[(result >> 2) + i * 2]
        graph.nodes[i]['y'] = Module.HEAPF32[(result >> 2) + i * 2 + 1]
    }

    Module._free(source)
    Module._free(target)
    Module._free_buf(result)

    const data = NetV.Utils.transformGraphPosition(graph, 400, 400, 300)
    netv.data(data)
    netv.draw()
})
