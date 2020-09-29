/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

const WIDTH = 1000
const HEIGHT = 1000

const NODE_NUMs = [5e2, 1e3, 5e3, 1e4, 5e4]
const NODE_NUM = 5e2
const LINK_NUM = NODE_NUM * 20

const container = document.getElementById('main')

testWithDiffNodeNumbers(container, NODE_NUMs)

function testWithDiffNodeNumbers(container, nodeNumbers, step = 0, density = 20) {
    console.log(nodeNumbers[step], nodeNumbers[step] * density)
    const testData = generateData(nodeNumbers[step], nodeNumbers[step] * density, WIDTH, HEIGHT)

    testNetV(WIDTH, HEIGHT, container, testData)

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
    }

    sleep(5000).then(() => {
        console.log(stats.getFPSHistory())
        refresh(container)
        if (step + 1 < nodeNumbers.length) {
            testWithDiffNodeNumbers(container, nodeNumbers, step + 1)
        } else {
            console.log('Test complte.')
        }
    })
}

function refresh(div) {
    const canvas = div.querySelector('canvas')
    if (canvas)
        canvas
            .getContext('webgl2')
            .getExtension('WEBGL_lose_context')
            .loseContext()
    Array.from(div.children).forEach((child) => div.removeChild.bind(div)(child))
}
