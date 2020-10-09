/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import { NetV } from '../build/NetV'
import { initPage, isFirstTime } from './lib/utils'
import { TestCase } from './TestCase'

const numbersOfNodes = [1e2, 5e2, 1e3].reverse() // , 2e3, 4e3, 8e3
const density = 20

if (isFirstTime()) {
    initPage() // to get the frame rate (fps)
} else {
    const testCase = new TestCase({
        numbersOfNodes,
        numbersOfLinks: numbersOfNodes.map((n) => n * density),
        name: 'NetV'
    })
    test(testCase)
}

async function test(testCase) {
    const netv = new NetV({
        container: testCase.container,
        width: testCase.width,
        height: testCase.height,
        nodeLimit: testCase.data.nodes.length,
        linkLimit: testCase.data.links.length
    })

    netv.data(testCase.data)

    await testCase.run(() => {
        netv.nodes().forEach((n) => {
            n.position({
                x: Math.random() * testCase.width,
                y: Math.random() * testCase.height
            })
        })
        netv.draw()
    }, 10000)

    testCase.finish()
}
