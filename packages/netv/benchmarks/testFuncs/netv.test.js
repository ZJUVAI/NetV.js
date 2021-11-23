/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import NetV from '../../build/NetV'

export default async function test(testCase) {
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
    })
}
