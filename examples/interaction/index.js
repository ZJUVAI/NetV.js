/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description interaction example, add global and element-wise event handler
 */

const testData = {
    nodes: [
        {
            id: '0',
            x: 300,
            y: 100,
            class: '000',
            style: {
                shape: 'rect',
                // rotate: Math.PI / 4,
                fill: { r: 1, g: 0, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '1',
            x: 500,
            y: 100,
            class: '111',
            style: {
                shape: 'triangle',
                fill: { r: 0, g: 1, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '2',
            x: 400,
            y: 400,
            class: '222',
            style: {
                fill: { r: 0, g: 0, b: 1, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '2',
            class: 'link 0 - 2',
            style: {
                strokeWidth: 4
            }
        },
        {
            source: '1',
            target: '2',
            class: 'link 1 - 2',
            style: {
                strokeWidth: 4
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

testData.nodes[0].clickCallback = (node) => {
    node.fill({
        r: 1,
        g: 1,
        b: 1,
        a: 1
    })
    node.r(15)
    netv.draw()
}

netv.data(testData)

netv.nodes()[0].onHover((node) => {
    console.log(`${node.id()} hovered`)
})

netv.links()[1].onHover((link) => {
    console.log(`${link.source().id()}-${link.target().id()} hovered`)
})

netv.draw()
