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
const chaosLayout = new Chaos()
chaosLayout.parameters({
    width,
    height,
    timeout: 0
})
chaosLayout.data(data)
chaosLayout.onEach((data) => {
    data.nodes.forEach(nodeData => {
        let node = netv.getNodeById(nodeData.id)
        node.x(nodeData.x)
        node.y(nodeData.y)
    });
    netv.draw()
})
chaosLayout.onStop((data) => {
    console.log(data)
})
chaosLayout.start()

document.getElementById("pause").onclick = () => {
    chaosLayout.pause();
}
document.getElementById("resume").onclick = () => {
    chaosLayout.resume();
}
document.getElementById("stop").onclick = () => {
    chaosLayout.stop();
}