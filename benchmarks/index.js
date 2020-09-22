/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

const WIDTH = 1000;
const HEIGHT = 1000;

const NODE_NUM = 2 * 1e5;
const LINK_NUM = NODE_NUM * 0;

const netv = new NetV({
    container: document.getElementById('main'),
    width: WIDTH,
    height: HEIGHT,
    nodeLimit: 1e7,
    linkLimit: 1e7,

})

const testData = generateData(NODE_NUM, LINK_NUM, WIDTH, HEIGHT);

netv.data(testData)


render();

function render() {
    stats.begin();

    updateData(netv);
    netv.draw()

    stats.end();

    requestAnimationFrame(render);
}

function updateData(netv) {
    netv.nodes().forEach((n) => {
        n.position(Math.random() * WIDTH, Math.random() * HEIGHT)
    });
}
