/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import { G } from '../lib/G'

export default async function test(testCase) {
    const canvas = document.createElement('canvas')
    testCase.container.appendChild(canvas)
    canvas.width = testCase.width
    canvas.height = testCase.height
    const g = new G({
        container: canvas
    })
    g.data(testCase.data)

    await testCase.run(() => {
        g.beginBatch()
        g.nodes().forEach((n) => {
            n.x = Math.random() * testCase.width
            n.y = Math.random() * testCase.height
        })
        g.refresh()
        g.endBatch()
    })
}
