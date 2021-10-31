
const width = 500
const height = 400

// eslint-disable-next-line no-undef
const netv = new NetV({
    container: document.getElementById('main'),
    width,
    height
})

const data = netv.loadDataset('miserables')

netv.data(
    // eslint-disable-next-line no-undef
    NetV.Utils.transformGraphPosition(
        data,
        Math.min(width, height) * 0.9,
        width / 2,
        height / 2
    )
)
// eslint-disable-next-line no-undef
const FA2Layout = new ForceAtlas2()
const param = {
    iterations: 1000,
    useWorker: false,
    linLogMode: false,
    outboundAttractionDistribution: false,
    adjustSizes: false,
    edgeWeightInfluence: 0,
    scalingRatio: 1,
    strongGravityMode: false,
    gravity: 1,
    slowDown: 1,
    barnesHutOptimize: false,
    barnesHutTheta: 0.5
}
FA2Layout.parameters(param)
FA2Layout.data(data)
// avoid shaking by maxShakeDistance
function avoidShaking(data, maxShakeDistance = Infinity) {
    data.nodes.forEach(nodeData => {
        let node = netv.getNodeById(nodeData.id)
        let dx = nodeData.x - node.x()
        let dy = nodeData.y - node.y()
        let distance = Math.hypot(dx, dy)
        let scale = distance > maxShakeDistance ? maxShakeDistance / distance : 1
        node.x(node.x() + dx * scale)
        node.y(node.y() + dy * scale)
    });
}
FA2Layout.onEach((data) => {
    // eslint-disable-next-line no-param-reassign
    data =
        // eslint-disable-next-line no-undef
        NetV.Utils.transformGraphPosition(
            data,
            Math.min(width, height) * 0.9,
            width / 2,
            height / 2
        )
    avoidShaking(data)
    netv.draw()
})
FA2Layout.onStop((data) => {
    console.log(data)
})
FA2Layout.start()

document.getElementById("pause").onclick = () => {
    FA2Layout.pause();
}
document.getElementById("resume").onclick = () => {
    FA2Layout.resume();
}
document.getElementById("stop").onclick = () => {
    FA2Layout.stop();
}
document.getElementById("restart").onclick = () => {
    FA2Layout.restart();
}
function Switcher(id) {
    let DOMElement = document.createElement("button")
    DOMElement.id = id + "Switcher"
    if (param[id])
        DOMElement.innerHTML = id + ":OFF"
    else
        DOMElement.innerHTML = id + ":OFF"
    DOMElement.onclick = (e) => {
        if (param[id]) {
            param[id] = false
            DOMElement.innerHTML = id + ":OFF"
        }
        else {
            param[id] = true
            DOMElement.innerHTML = id + ":ON"
        }
        FA2Layout.parameters(param)
    }
    document.body.appendChild(DOMElement)
}
function Transformator(id) {
    let DOMElement = document.createElement("div")
    DOMElement.id = id + "Transformator"
    let Text = document.createTextNode(id + ":");
    DOMElement.appendChild(Text)
    let Transformator = document.createElement("input")
    Transformator.type = "number"
    Transformator.value = param[id]
    Transformator.onchange = (e) => {
        param[id] = Transformator.value
        FA2Layout.parameters(param)
    }
    DOMElement.appendChild(Transformator)
    document.body.appendChild(DOMElement)
}
for (let id in param) {
    if (id === 'useWorker') continue;
    if (typeof param[id] === 'boolean') Switcher(id)
    else Transformator(id)
}