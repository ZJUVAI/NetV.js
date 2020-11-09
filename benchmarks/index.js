/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */

import { RESULT, STEP, TEST_FUNCS_INDEX } from './configs'
import testNetV from './testFuncs/netv.test'
import testStardust from './testFuncs/stardust.test'
import testSigma from './testFuncs/sigma.test'
import testCytoscape from './testFuncs/cytoscape.test'
import testD3Canvas from './testFuncs/d3.canvas.test'
import testD3SVG from './testFuncs/d3.svg.test'
import { initPage, reloadPage, download, json2csv } from './lib/utils'
import { TestCase } from './TestCase'
import { drawLineChart } from './lib/linechart'

// does it need to clear local storage?
initPage()

const numbersOfNodes = [1e2, 5e2, 1e3, 2e3, 4e3, 8e3] // ! NOTE: the array should be ascending
const density = 20

const testFuncs = [
    {
        name: 'D3SVG',
        func: testD3SVG
    },
    {
        name: 'D3Canvas',
        func: testD3Canvas
    },
    {
        name: 'Cytoscape',
        func: testCytoscape
    },
    {
        name: 'Sigma.js (webgl)',
        func: testSigma
    },
    {
        name: 'NetV',
        func: testNetV
    },
    {
        name: 'Stardust',
        func: testStardust
    }
]

const step = localStorage.getItem(STEP)
let testFuncsIndex = localStorage.getItem(TEST_FUNCS_INDEX)

if (!step || step === '0') {
    if (testFuncsIndex === undefined || testFuncsIndex === null) {
        testFuncsIndex = 0
    } else {
        testFuncsIndex = Number(testFuncsIndex)
        testFuncsIndex += 1
    }
}

localStorage.setItem(TEST_FUNCS_INDEX, testFuncsIndex.toString())

const testFunc = testFuncs[testFuncsIndex].func

const testCase = new TestCase({
    numbersOfNodes,
    numbersOfLinks: numbersOfNodes.map((n) => n * density),
    name: testFuncs[testFuncsIndex].name
})

test(testCase, testFunc)

async function test(testCase, testFunc) {
    await testFunc(testCase)
    const isRefreshed = testCase.finish()

    // if not reload
    if (!isRefreshed && Number(testFuncsIndex) + 1 >= testFuncs.length) {
        const result = localStorage.getItem(RESULT)
        localStorage.clear()

        createDownloadButton({
            container: testCase.container,
            text: 'Download JSON Result',
            data: result,
            type: 'json'
        })

        createDownloadButton({
            container: testCase.container,
            text: 'Download CSV Result',
            data: json2csv(JSON.parse(result)),
            type: 'csv'
        })

        drawLineChart(testCase.container, JSON.parse(result))
    } else {
        reloadPage()
    }
}

function createDownloadButton({ container, text, data, type }) {
    const downloader = document.createElement('button')
    container.appendChild(downloader)
    downloader.textContent = text
    downloader.onclick = function () {
        const time = new Date()
        const timestamp = [
            time.getFullYear(),
            time.getMonth(),
            time.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ].join('-')
        download(data, `result-${timestamp}.${type}`, 'text/plain')
    }
}
