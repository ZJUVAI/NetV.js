/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import { testNetV } from './netv'
import Stats from './lib/stats.module'
import { generateData } from './lib/utils'
import { drawLineChart } from './lib/linechart'

const width = 1000
const height = 1000

const NODE_NUMs = [5e2, 1e3, 2e3, 4e3, 8e3]

const container = document.getElementById('main')

const title = document.createElement('h1')
document.body.insertBefore(title, container)

let step: any = localStorage.getItem('step')
if (!step) {
    step = 0
} else {
    step = Number(step)
}

test({
    container,
    nodeNumbers: NODE_NUMs.reverse(),
    testFunc: testNetV,
    testResultName: 'NetVTestResult',
    step
})

function test({ container, nodeNumbers, testFunc, testResultName, step = 0, density = 20 }) {
    const stats = Stats()
    stats.showPanel(0)
    stats.dom.setAttribute('class', 'status')
    document.body.appendChild(stats.dom)

    title.textContent = `#nodes: ${nodeNumbers[step]}, #edge: ${nodeNumbers[step] * density}`

    localStorage.setItem('killedManually', '1')

    const testData = generateData({
        nodeNum: nodeNumbers[step],
        edgeNum: nodeNumbers[step] * density,
        width: width,
        height: height
    })

    testFunc({
        width,
        height,
        container,
        data: testData,
        stats
    })

    function sleep(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }

    sleep(10000).then(() => {
        // wait for 10 seconds to run the test.
        const FPSHistory = stats.getFPSHistory()
        let testResult: any = localStorage.getItem(testResultName)
        if (!testResult) {
            testResult = []
        } else {
            testResult = JSON.parse(testResult)
        }
        testResult.push({
            size: nodeNumbers[step] * (density + 1),
            value: FPSHistory.reduce((sum, fps) => sum + fps, 0) / FPSHistory.length
        })
        localStorage.setItem(testResultName, JSON.stringify(testResult))

        localStorage.setItem('killedManually', '0')
        localStorage.setItem('step', (step + 1).toString())

        if (step + 1 < nodeNumbers.length) {
            location.reload()
        } else {
            drawLineChart(testResult)
            localStorage.clear()
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
