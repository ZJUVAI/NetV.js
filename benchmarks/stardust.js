const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

const canvas = document.querySelector('#canvas')
const WIDTH = canvas.width
const HEIGHT = canvas.height
let nodeNum = 100
let edgeNum = nodeNum * 20

const data = generateData(nodeNum, edgeNum)

const platform = Stardust.platform('webgl-2d', canvas, WIDTH, HEIGHT)
platform.pixelRatio = window.devicePixelRatio || 1

const snodes = Stardust.mark.create(Stardust.mark.circle(8), platform)
const snodesBG = Stardust.mark.create(Stardust.mark.circle(8), platform)
const sedges = Stardust.mark.create(Stardust.mark.line(), platform)

snodes.attr('radius', (d) => d.r).attr('color', [1, 0, 0, 1])
snodesBG.attr('radius', (d) => d.r + 1).attr('color', [1, 1, 1, 0.5])
sedges.attr('width', (d) => d.strokeWidth).attr('color', [0.5, 0.5, 0.5, 0.1])

const positions = Stardust.array('Vector2')
    .value((d) => [d.x, d.y])
    .data(data.nodes)

const positionScale = Stardust.scale
    .custom('array(pos, value)')
    .attr('pos', 'Vector2Array', positions)
snodes.attr(
    'center',
    positionScale((d) => {
        return d.id
    })
)
snodesBG.attr(
    'center',
    positionScale((d) => d.id)
)
sedges.attr(
    'p1',
    positionScale((d) => {
        return d.source
    })
)
sedges.attr(
    'p2',
    positionScale((d) => d.target)
)

snodesBG.data(data.nodes)
snodes.data(data.nodes)
sedges.data(data.links)

render()

function render() {
    stats.begin()

    updateData()

    platform.clear([1, 1, 1, 1])
    sedges.render()
    snodesBG.render()
    snodes.attr('radius', 2)
    snodes.render()

    stats.end()
    requestAnimationFrame(render)
}

function updateData() {
    data.nodes.forEach((n) => {
        n.x = Math.random() * WIDTH
        n.y = Math.random() * HEIGHT
    })
}
