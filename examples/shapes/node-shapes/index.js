/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description interaction example, add global and element-wise event handler
 */

const testData = {
    nodes: [
        {
            id: '0',
            x: 100,
            y: 100,
            style: {
                shape: 'cross',
                rotate: Math.PI / 4,
                strokeWidth: 4,
                innerWidth: 20,
                innerHeight: 20,
                fill: { r: 1, g: 0, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '1',
            x: 200,
            y: 100,
            style: {
                shape: 'triangle',
                fill: { r: 0, g: 1, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '2',
            x: 300,
            y: 100,
            style: {
                fill: { r: 0, g: 0, b: 1, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '3',
            x: 400,
            y: 100,
            style: {
                shape: 'rect'
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '1',
            style: {
                strokeWidth: 10
            }
        },
        {
            source: '1',
            target: '2',
            style: {
                strokeWidth: 10
            }
        },
        {
            source: '2',
            target: '3',
            style: {
                shape: 'curve',
                strokeWidth: 10
            }
        }
    ]
}

const configs = {
    container: document.getElementById('main'),
    node: {
        style: {
            r: 25,
            width: 50,
            height: 50,
            vertexAlpha: { x: 0, y: -25 },
            vertexBeta: { x: -12.5 * Math.sqrt(3), y: 12.5 },
            vertexGamma: { x: 12.5 * Math.sqrt(3), y: 12.5 },
            strokeWidth: 5,
            fill: { r: 1, g: 0, b: 0, a: 0.8 }
        },
        clickCallback: (node) => {
            alert(`Node ${node.id()} clicked~`)
        }
    },
    link: {
        clickCallback: (link) => {
            link.strokeColor({
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                a: Math.random()
            })
            netv.draw()
            // alert(`Link ${link.source().id()}-${link.target().id()} clicked~`)
        }
    },
    width: 800,
    height: 600,
    backgroundColor: { r: 0.95, g: 0.98, b: 0.98, a: 1 },
    nodeLimit: 1000
}
const netv = new NetV(configs)

netv.data(testData)
netv.draw()

netv.nodes().forEach((node) => {
    const shape = node.shape()
    const fill = node.fill()
    node.on('mousedown', (e) => {
        console.log(e)
        const node = e.element
        if (shape == 'circle') {
            node.shape('rect')
        } else {
            node.shape('circle')
        }
        node.fill({
            r: 1,
            g: 1,
            b: 1,
            a: 1
        })
        netv.draw()
    })
    node.on('mouseup', (e) => {
        console.log(e)
        const node = e.element
        node.shape(shape)
        node.fill(fill)
        netv.draw()
    })
    node.on('mouseover', (e) => {
        const node = e.element
        node.fill({ r: 0, g: 0, b: 0, a: 0 })
        netv.draw()
    })
    node.on('mouseout', (e) => {
        const node = e.element
        node.fill(fill)
        netv.draw()
    })
    node.on('dragstart')
    node.on('dragging')
    node.on('dragend')
})

netv.links().forEach((link) => {
    const strokeColor = link.strokeColor()
    link.on('click', (e) => {
        console.log(e)
        const link = e.element
        link.strokeColor({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
            a: 1
        })
        netv.draw()
    })

    link.on('mouseover', (e) => {
        console.log(e)
        const link = e.element
        link.strokeColor({
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })
        netv.draw()
    })
    link.on('mouseout', (e) => {
        console.log(e)
        const link = e.element
        link.strokeColor(strokeColor)
        netv.draw()
    })
})

netv.on('zoom')
netv.on('pan')

const reverseBackgroundColor = () => {
    netv.backgroundColor({
        r: 1 - netv.backgroundColor().r,
        g: 1 - netv.backgroundColor().g,
        b: 1 - netv.backgroundColor().b,
        a: netv.backgroundColor().a
    })
    netv.draw()
}
netv.on('mousedown', reverseBackgroundColor)
netv.on('mouseup', reverseBackgroundColor)
