
const width = 500
const height = 400

// eslint-disable-next-line no-undef
const netv = new NetV({
    container: document.getElementById('main'),
    width,
    height
})

const data = netv.loadDataset('miserables')

// eslint-disable-next-line no-undef
const FA2Layout = new ForceAtlas2()
FA2Layout.parameters({
    useWorker: true,
    iterations: 1000
})
FA2Layout.data(data)
FA2Layout.onEach((data) => {
    netv.data(
        // eslint-disable-next-line no-undef
        NetV.Utils.transformGraphPosition(
            data,
            Math.min(width, height) * 0.9,
            width / 2,
            height / 2
        )
    )
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