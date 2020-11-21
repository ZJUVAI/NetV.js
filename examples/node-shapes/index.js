// 图数据包含了节点数据（nodes）和节点与节点之间的链接（links）
const graph = { nodes: [], links: [] }
// 当前的节点支持了以下三种不同的形状
const shapes = ['rect', 'circle', 'triangle'] // TODO: 你需要为节点增加新的形状

// 为每个形状生成一个节点
shapes.forEach((shape, i) => {
    const node = {
        id: String(i), // 每个节点的索引，也是唯一性标记
        x: 200 * (i + 1), // 依次水平排列
        y: 100,
        style: {
            // 指定节点的外观
            shape, // 节点的形状
            fill: { r: 1, g: 0, b: 0, a: 1 }, // 填充颜色
            strokeWidth: 4, // 边框宽度
            strokeColor: { r: 1, g: 0, b: 1, a: 0.3 } // 边框颜色
        }
    }
    switch (shape) {
        case 'rect':
            node.style.width = node.style.height = 50
            break
        case 'circle':
            node.style.r = 25
            break
        case 'triangle':
            node.style = {
                ...node.style,
                vertexAlpha: { x: 0, y: -25 },
                vertexBeta: { x: -12.5 * Math.sqrt(3), y: 12.5 },
                vertexGamma: { x: 12.5 * Math.sqrt(3), y: 12.5 }
            }
            break
        // TODO: to be add more cases
    }
    graph.nodes.push(node)
    if (i > 0) {
        graph.links.push({
            source: String(i),
            target: String(i - 1),
            style: { strokeWidth: 4 }
        })
    }
})

const netV = new NetV({
    container: document.getElementById('main'),
    width: 1000,
    height: 400
})

netV.data(graph)

netV.draw()

netV.on('zoom', () => {})
netV.on('pan', () => {})

netV.nodes().forEach((node) => {
    const reverseFillOf = (node) => {
        node.fill(
            Object.entries(node.fill()).reduce((fill, [key, value]) => {
                if (key !== 'a') fill[key] = 1 - value
                return fill
            }, {})
        )
    }
    node.on('mousedown', (e) => {
        const node = e.element
        reverseFillOf(node)
        netV.draw()
    })
    node.on('mouseup', (e) => {
        const node = e.element
        reverseFillOf(node)
        netV.draw()
    })
    node.on('dragging', () => {})
})

netV.links().forEach((link) => {
    const reverseStrokeColorOf = (link) => {
        link.strokeColor(
            Object.entries(link.strokeColor()).reduce((strokeColor, [key, value]) => {
                if (key !== 'a') strokeColor[key] = 1 - value
                return strokeColor
            }, {})
        )
    }
    link.on('mousedown', (e) => {
        const link = e.element
        reverseStrokeColorOf(link)
        netV.draw()
    })
    link.on('mouseup', (e) => {
        const link = e.element
        reverseStrokeColorOf(link)
        netV.draw()
    })
})
