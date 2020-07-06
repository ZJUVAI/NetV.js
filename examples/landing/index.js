/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description landing page
 */

const div = document.getElementById('main')

const mousePos = {
    x: 1e9,
    y: 1e9
}

div.addEventListener('mousemove', (ev) => {
    mousePos.x = ev.offsetX
    mousePos.y = ev.offsetY
})

const configs = {
    container: div,
    width: 1920,
    height: 1080,
    nodeLimit: 1e5,
    linkLimit: 1e7,
    backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
    node: {
        strokeWidth: 0,
        fill: { r: 0, g: 0.3, b: 0.7, a: 1 }
    }
}

const data = {
    nodes: [],
    links: []
}

// random generate nodes

data.nodes = Array(2000)
    .fill()
    .map((_, i) => {
        const x = Math.random() * configs.width
        const y = Math.random() * configs.height
        return {
            id: String(i),
            x: x,
            y: y,
            originX: x,
            originY: y,
            r: Math.random() * 3
        }
    })

const netv = new NetV(configs)
netv.data(data)

const rate = 5
const forceRate = 20
const margin = 20
const forceRange = 100

const mouseMass = 10000000
const originK = 10
const deltaTime = 100

function render() {
    data.nodes.forEach((n) => {
        const node = netv.getNodeById(n.id)

        // calculate movement direction
        const lenMouse = Math.sqrt((n.x - mousePos.x) ** 2 + (n.y - mousePos.y) ** 2)
        let forceMouse = mouseMass / lenMouse ** 2
        const lenOrigin = Math.sqrt((n.x - n.originX) ** 2 + (n.y - n.originY) ** 2)
        let forceOrigin = originK * Math.sqrt((n.x - n.originX) ** 2 + (n.y - n.originY) ** 2)
        if (isNaN(forceOrigin)) {
            forceOrigin = 0
        }
        if (isNaN(forceMouse)) {
            forceMouse = 0
        }

        const force = {
            x: (n.originX - n.x) * originK + ((mousePos.x - n.x) / lenMouse) * forceMouse,
            y: (n.originY - n.y) * originK + ((mousePos.y - n.y) / lenMouse) * forceMouse
        }

        const movement = {
            x: force.x * 0.01,
            y: force.y * 0.01
        }

        n.x += movement.x
        n.y += movement.y

        /*
        if ((n.x - mousePos.x) ** 2 + (n.y - mousePos.y) ** 2 < forceRange ** 2) {
            n.x += ((mousePos.x - n.x) / forceRange) * forceRate
            n.y += ((mousePos.y - n.y) / forceRange) * forceRate
        }
        if (n.x < -margin) {
            n.x = -margin
        }
        if (n.x > configs.width + margin) {
            n.x = configs.width + margin
        }
        if (n.y < -margin) {
            n.y = -margin
        }
        if (n.y > configs.height + margin) {
            n.y = configs.height + margin
        }
        */
        // node.position(n.x + rate * (Math.random() - 0.5), n.y + rate * (Math.random() - 0.5))
        node.position(n.x, n.y)
        // if n.x
    })
    netv.draw()
    // requestAnimationFrame(render)
}

// render()
setInterval(() => {
    render()
}, deltaTime)
