// /**
//  * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
//  * @description benchmark, FPS of NetV.js
//  */
// import { NetV } from '../build/NetV'
// import { initPage, isFirstTime } from './lib/utils'
// import { TestCase } from './TestCase'

// const numbersOfNodes = [5e2, 1e3, 2e3, 4e3, 8e3]
// const density = 20

// if (isFirstTime()) {
//     initPage() // to get the frame rate (fps)
// } else {
//     const testCase = new TestCase({
//         numbersOfNodes,
//         numbersOfLinks: numbersOfNodes.map((n) => n * density),
//         name: 'NetV'
//     })
//     test(testCase)
// }

// async function test(testCase) {
//     const netv = new NetV({
//         container: testCase.container,
//         width: testCase.width,
//         height: testCase.height,
//         nodeLimit: testCase.data.nodes.length,
//         linkLimit: testCase.data.links.length
//     })

//     netv.data(testCase.data)

//     await testCase.run(() => {
//         netv.nodes().forEach((n) => {
//             n.position({
//                 x: Math.random() * testCase.width,
//                 y: Math.random() * testCase.height
//             })
//         })
//         netv.draw()
//     }, 10000)

//     testCase.finish()
// }

import { drawLineChart } from './lib/linechart'

const reportDiv = document.createElement('div')
reportDiv.setAttribute('style', `display: inline-block; vertical-align: top;`)
document.body.appendChild(reportDiv)

const data = [
    { size: 10500, value: 59.46074438342175 },
    { size: 21000, value: 58.6091357039615 },
    { size: 42000, value: 39.192306624110856 },
    { size: 84000, value: 21.305115330844 },
    { size: 168000, value: 10.852097603200827 }
]

drawLineChart(reportDiv, data)
