/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */

import { RESULT, STEP, TEST_FUNCS_INDEX } from './configs'
import testNetV from './netv.test'
import testStardust from './stardust.test'
import testSigma from './sigma.test'
import testCytoscape from './cytoscape.test'
import { initPage, reloadPage, download } from './lib/utils'
import { TestCase } from './TestCase'

// does it need to clear local storage?
initPage()

const numbersOfNodes = [1e2, 5e2, 1e3, 2e3, 4e3, 8e3] // ! NOTE: the array should be ascending
const density = 20

const testFuncs = [
    {
        name: 'Cytoscape',
        func: testCytoscape
    },
    {
        name: 'Sigma.js',
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
        download(result, 'result.json', 'text/plain')
    } else {
        reloadPage()
    }
}
