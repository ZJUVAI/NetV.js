<script>
const id = 'node-triangle'
export default {
    name: id,
    data() {
        return {
            id
        }
    },
    mounted() {
        const div = document.getElementById(id)
        const width = div.clientWidth
        const height = 200
        const testData = {
            nodes: [
                {
                    id: '0',
                    x: Math.round(width / 30) * 10,
                    y: 100,
                    style: { shape: 'triangle' }
                },
                {
                    id: '1',
                    x: Math.round(width / 30) * 20,
                    y: 100,
                    style: { shape: 'triangle' }
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                }
            ]
        }

        d3.select(div).attr('style', 'position: relative;')
        const svg = d3
            .select(div)
            .insert('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('style', 'position: absolute; left: 0; top: 0; background: #ffffff66;')
        const interval = 10
        for (let i = 0; i < width; i += interval) {
            svg.append('line')
                .attr('x1', i)
                .attr('y1', 0)
                .attr('x2', i)
                .attr('y2', height)
                .attr('stroke', 'black')
        }
        for (let j = 0; j < height; j += interval) {
            svg.append('line')
                .attr('x1', 0)
                .attr('y1', j)
                .attr('x2', width)
                .attr('y2', j)
                .attr('stroke', 'black')
        }

        const netv = new NetV({
            container: div,
            width,
            height,
            node: {
                style: {
                    fill: { r: 230 / 255, g: 28 / 255, b: 72 / 255, a: 0.8 },
                    strokeColor: { r: 1, g: 1, b: 1, a: 0.8 }
                }
            },
            link: {
                style: {
                    strokeColor: { r: 0, g: 0, b: 0, a: 1 },
                    strokeWidth: 5
                }
            },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 }
        })
        netv.data(testData)

        const node0 = netv.getNodeById('0')
        node0.vertexAlpha({ x: 0, y: -40 })
        node0.vertexBeta({ x: 20 * Math.sqrt(3), y: 20 })
        node0.vertexGamma({ x: -20 * Math.sqrt(3), y: 20 })
        node0.strokeWidth(0)

        const node1 = netv.getNodeById('1')
        node1.vertexAlpha({ x: 0, y: -40 })
        node1.vertexBeta({ x: 20 * Math.sqrt(3), y: 20 })
        node1.vertexGamma({ x: -20 * Math.sqrt(3), y: 20 })
        node1.strokeWidth(20)

        const node2 = netv.getNodeById('2')
        const node3 = netv.getNodeById('3')
        const node4 = netv.getNodeById('4')
        const node5 = netv.getNodeById('5')
        node2.position({
            x: node0.vertexAlpha().x + node0.position().x,
            y: node0.vertexAlpha().y + node0.position().y
        })
        node2.r(5)
        node2.strokeWidth(0)
        node2.fill({ r: 0, g: 0, b: 0, a: 1 })

        node3.position({
            x: node0.vertexBeta().x + node0.position().x,
            y: node0.vertexBeta().y + node0.position().y
        })
        node3.r(5)
        node3.strokeWidth(0)
        node3.fill({ r: 0, g: 0, b: 0, a: 1 })
        node4.position({
            x: node0.vertexGamma().x + node0.position().x,
            y: node0.vertexGamma().y + node0.position().y
        })
        node4.r(5)
        node4.strokeWidth(0)
        node4.fill({ r: 0, g: 0, b: 0, a: 1 })

        node5.position(node0.position())
        node5.r(5)
        node5.strokeWidth(0)
        node5.fill({ r: 0, g: 0, b: 0, a: 1 })

        const node6 = netv.getNodeById('6')
        const node7 = netv.getNodeById('7')
        const node8 = netv.getNodeById('8')
        const node9 = netv.getNodeById('9')
        node6.position({
            x: node1.vertexAlpha().x + node1.position().x,
            y: node1.vertexAlpha().y + node1.position().y
        })
        node6.r(5)
        node6.strokeWidth(0)
        node6.fill({ r: 0, g: 0, b: 0, a: 1 })

        node7.position({
            x: node1.vertexBeta().x + node1.position().x,
            y: node1.vertexBeta().y + node1.position().y
        })
        node7.r(5)
        node7.strokeWidth(0)
        node7.fill({ r: 0, g: 0, b: 0, a: 1 })
        node8.position({
            x: node1.vertexGamma().x + node1.position().x,
            y: node1.vertexGamma().y + node1.position().y
        })
        node8.r(5)
        node8.strokeWidth(0)
        node8.fill({ r: 0, g: 0, b: 0, a: 1 })

        node9.position(node1.position())
        node9.r(5)
        node9.strokeWidth(0)
        node9.fill({ r: 0, g: 0, b: 0, a: 1 })

        netv.draw()

        const canvas = d3.select(div).select('canvas')
        canvas.attr('style', canvas.attr('style') + 'position: relative; left: 0; top: 0;')

        const textsvg = d3
            .select(div)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('style', svg.attr('style') + 'background: transparent;')

        textsvg
            .append('line')
            .attr('x1', node5.x() - 5 - 30)
            .attr('y1', node5.y() - 30)
            .attr('x2', node5.x())
            .attr('y2', node5.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node5.x() - 5 - 30)
            .attr('y', node5.y() - 30)
            .text('origin')
            .attr('text-anchor', 'end')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node5.x() - 5 - 30)
            .attr('y', node5.y() - 30)
            .attr('text-anchor', 'end')
            .text('origin')

        textsvg
            .append('line')
            .attr('x1', node2.x() - 5 - 30)
            .attr('y1', node2.y() - 30)
            .attr('x2', node2.x())
            .attr('y2', node2.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node2.x() - 5 - 30)
            .attr('y', node2.y() - 30)
            .text('vertexAlpha')
            .attr('text-anchor', 'end')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node2.x() - 5 - 30)
            .attr('y', node2.y() - 30)
            .text('vertexAlpha')
            .attr('text-anchor', 'end')

        textsvg
            .append('line')
            .attr('x1', node3.x() - 5 - 30)
            .attr('y1', node3.y() + 30)
            .attr('x2', node3.x())
            .attr('y2', node3.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node3.x() - 5 - 30)
            .attr('y', node3.y() + 30)
            .attr('text-anchor', 'end')
            .text('vertexBeta')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node3.x() - 5 - 30)
            .attr('y', node3.y() + 30)
            .attr('text-anchor', 'end')
            .text('vertexBeta')

        textsvg
            .append('line')
            .attr('x1', node4.x() - 5 - 30)
            .attr('y1', node4.y() - 30)
            .attr('x2', node4.x())
            .attr('y2', node4.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node4.x() - 5 - 30)
            .attr('y', node4.y() - 30)
            .text('vertexGamma')
            .attr('text-anchor', 'end')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node4.x() - 5 - 30)
            .attr('y', node4.y() - 30)
            .attr('text-anchor', 'end')
            .text('vertexGamma')

        textsvg
            .append('line')
            .attr('x1', node9.x() + 5 + 30)
            .attr('y1', node9.y() - 30)
            .attr('x2', node9.x())
            .attr('y2', node9.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node9.x() + 5 + 30)
            .attr('y', node9.y() - 30)
            .text('origin')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node9.x() + 5 + 30)
            .attr('y', node9.y() - 30)
            .text('origin')

        textsvg
            .append('line')
            .attr('x1', node6.x() + 5 + 30)
            .attr('y1', node6.y() - 30)
            .attr('x2', node6.x())
            .attr('y2', node6.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node6.x() + 5 + 30)
            .attr('y', node6.y() - 30)
            .text('vertexAlpha')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node6.x() + 5 + 30)
            .attr('y', node6.y() - 30)
            .text('vertexAlpha')

        textsvg
            .append('line')
            .attr('x1', node7.x() + 5 + 30)
            .attr('y1', node7.y() + 30)
            .attr('x2', node7.x())
            .attr('y2', node7.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node7.x() + 5 + 30)
            .attr('y', node7.y() + 30)
            .text('vertexBeta')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node7.x() + 5 + 30)
            .attr('y', node7.y() + 30)
            .text('vertexBeta')

        textsvg
            .append('line')
            .attr('x1', node8.x() - 5 - 30)
            .attr('y1', node8.y() - 30)
            .attr('x2', node8.x())
            .attr('y2', node8.y())
            .attr('stroke-width', 2)
            .attr('stroke', '#333')

        textsvg
            .append('text')
            .attr('x', node8.x() - 5 - 30)
            .attr('y', node8.y() - 30)
            .text('vertexGamma')
            .attr('text-anchor', 'end')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node8.x() - 5 - 30)
            .attr('y', node8.y() - 30)
            .text('vertexGamma')
            .attr('text-anchor', 'end')
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>
