/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
const WIDTH = 1000
const HEIGHT = 1000

const NODE_NUMs = [5e2, 1e3, 5e3, 1e4, 5e4]

const container = document.getElementById('main')

test(container, NODE_NUMs.reverse(), testNetV)

function test(container, nodeNumbers, testFunc, step = 0, density = 20) {
    const stats = new Stats()
    stats.showPanel(0)
    stats.dom.setAttribute('class', 'status')
    document.body.appendChild(stats.dom)

    console.log(nodeNumbers[step], nodeNumbers[step] * density)
    const testData = generateData(nodeNumbers[step], nodeNumbers[step] * density, WIDTH, HEIGHT)

    testFunc(WIDTH, HEIGHT, container, testData, stats)

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
    }

    sleep(10000).then(() => {
        // wait for 10 seconds to run the test.
        console.log(stats.getFPSHistory())
        refresh(container)
        document.body.removeChild(document.querySelector('.status'))
        if (step + 1 < nodeNumbers.length) {
            test(container, nodeNumbers, testFunc, step + 1)
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
