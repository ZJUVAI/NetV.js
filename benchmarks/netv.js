/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import { NetV } from '../build/NetV'

export function testNetV({ width, height, container, data, stats }) {
    const netv = new NetV({
        container,
        width,
        height,
        nodeLimit: data.nodes.length,
        linkLimit: data.links.length
    })

    netv.data(data)

    render()

    function render() {
        stats.begin()

        updateData(netv)
        netv.draw()

        stats.end()

        requestAnimationFrame(render)
    }

    function updateData(netv) {
        netv.nodes().forEach((n) => {
            n.position({
                x: Math.random() * width,
                y: Math.random() * height
            })
        })
    }
}
