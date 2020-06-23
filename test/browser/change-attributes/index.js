/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test change attributes
 *
 * expected: when execute following change functions, the graph is changed respectively
 */

const netv = new NetV({
    container: document.getElementById('main'),
    node: {
        clickCallback: (node) => {
            console.log(node)
        }
    },
    link: {
        strokeWidth: 10,
        clickCallback: (link) => {
            console.log(link)
        }
    }
})
const testData = {
    nodes: [
        {
            id: '0',
            x: 0,
            y: 0,
            r: 10,
            fill: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
        },
        {
            id: '1',
            x: 100,
            y: 500,
            r: 5,
            fill: {
                r: 0,
                g: 1,
                b: 0,
                a: 1
            }
        },
        {
            id: '2',
            x: 400,
            y: 400,
            r: 20,
            fill: {
                r: 0,
                g: 0,
                b: 1,
                a: 1
            }
        },
        {
            id: '3',
            x: 800,
            y: 600,
            r: 20,
            fill: {
                r: 0,
                g: 0,
                b: 1,
                a: 1
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '1',
            strokeColor: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
        },
        {
            source: '0',
            target: '2',
            strokeColor: {
                r: 0,
                g: 1,
                b: 0,
                a: 1
            }
        },
        {
            source: '1',
            target: '2',
            strokeColor: {
                r: 0,
                g: 0,
                b: 1,
                a: 1
            }
        }
    ]
}

netv.data(testData)
netv.draw()

// change attribute functions

function changeFill(i) {
    const node = netv.getNodeById(String(i))
    node.fill({
        r: 0,
        g: 0,
        b: 0,
        a: 1
    })
    netv.$_renderer.nodeManager.changeAttribute(node, 'fill')
    netv.draw()
}

function changeRadius(i) {
    const node = netv.getNodeById(String(i))
    node.r(30)
    netv.$_renderer.nodeManager.changeAttribute(node, 'radius')
    netv.draw()
}

function changePosition(i) {
    const node = netv.getNodeById(String(i))
    node.x(400)
    node.y(300)
    netv.$_renderer.nodeManager.changeAttribute(node, 'position')
    netv.draw()
}

function changeStrokeWidth(i) {
    const node = netv.getNodeById(String(i))
    node.strokeWidth(5)
    netv.$_renderer.nodeManager.changeAttribute(node, 'strokeWidth')
    netv.draw()
}

function changeStrokeColor(i) {
    const node = netv.getNodeById(String(i))
    node.strokeColor({
        r: 1,
        g: 0,
        b: 0,
        a: 1
    })
    netv.$_renderer.nodeManager.changeAttribute(node, 'strokeColor')
    netv.draw()
}

function changeLinkPosition(s, t) {
    const link = netv.getLinkByEnds(String(s), String(t))
    const nodes = link.sourceTarget()
    nodes.source.x(0)
    nodes.source.y(600)
    nodes.target.x(800)
    nodes.target.y(0)
    netv.$_renderer.linkManager.changeAttribute(link, 'source')
    netv.$_renderer.linkManager.changeAttribute(link, 'target')
    netv.draw()
}

function changeLinkStrokeWidth(s, t) {
    const link = netv.getLinkByEnds(String(s), String(t))
    link.strokeWidth(3)
    netv.$_renderer.linkManager.changeAttribute(link, 'strokeWidth')
    netv.draw()
}

function changeLinkStrokeColor(s, t) {
    const link = netv.getLinkByEnds(String(s), String(t))
    link.strokeColor({
        r: 0,
        g: 0,
        b: 0,
        a: 1
    })
    netv.$_renderer.linkManager.changeAttribute(link, 'strokeColor')
    netv.draw()
}
