<script>
const id = 'node-cross'
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
                    x: Math.round(width / 40) * 10,
                    y: 100,
                    style: { shape: 'cross' }
                },
                {
                    id: '1',
                    x: Math.round(width / 40) * 30,
                    y: 100,
                    style: { shape: 'cross' }
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
        node0.width(80)
        node0.height(60)
        node0.innerWidth(40)
        node0.innerHeight(30)
        node0.strokeWidth(0)

        const node1 = netv.getNodeById('1')
        node1.width(80)
        node1.height(60)
        node1.innerWidth(40)
        node1.innerHeight(30)
        node1.strokeWidth(10)

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
            .attr('x1', node0.x() - node0.width() / 2)
            .attr('y1', node0.y() - node0.height())
            .attr('x2', node0.x() - node0.width() / 2)
            .attr('y2', node0.y())
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('line')
            .attr('x1', node0.x() + node0.width() / 2)
            .attr('y1', node0.y() - node0.height())
            .attr('x2', node0.x() + node0.width() / 2)
            .attr('y2', node0.y())
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('text')
            .attr('x', node0.x())
            .attr('y', node0.y() - node0.height())
            .attr('text-anchor', 'middle')
            .text('width')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node0.x())
            .attr('y', node0.y() - node0.height())
            .attr('text-anchor', 'middle')
            .text('width')

        // height label
        textsvg
            .append('line')
            .attr('x1', node0.x() - node0.width())
            .attr('y1', node0.y() - node0.height() / 2)
            .attr('x2', node0.x())
            .attr('y2', node0.y() - node0.height() / 2)
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('line')
            .attr('x1', node0.x() - node0.width())
            .attr('y1', node0.y() + node0.height() / 2)
            .attr('x2', node0.x())
            .attr('y2', node0.y() + node0.height() / 2)
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('text')
            .attr('x', node0.x() - node0.width())
            .attr('y', node0.y())
            .attr('text-anchor', 'middle')
            .text('height')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node0.x() - node0.width())
            .attr('y', node0.y())
            .attr('text-anchor', 'middle')
            .text('height')

        // inner width label
        textsvg
            .append('line')
            .attr('x1', node0.x() - node0.innerWidth() / 2)
            .attr('y1', node0.y())
            .attr('x2', node0.x() - node0.innerWidth() / 2)
            .attr('y2', node0.y() + node0.height())
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('line')
            .attr('x1', node0.x() + node0.innerWidth() / 2)
            .attr('y1', node0.y())
            .attr('x2', node0.x() + node0.innerWidth() / 2)
            .attr('y2', node0.y() + node0.height())
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('text')
            .attr('x', node0.x())
            .attr('y', node0.y() + node0.height())
            .attr('text-anchor', 'middle')
            .text('innerWidth')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node0.x())
            .attr('y', node0.y() + node0.height())
            .attr('text-anchor', 'middle')
            .text('innerWidth')

        // inner height label
        textsvg
            .append('line')
            .attr('x1', node0.x() + node0.width())
            .attr('y1', node0.y() - node0.innerHeight() / 2)
            .attr('x2', node0.x())
            .attr('y2', node0.y() - node0.innerHeight() / 2)
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('line')
            .attr('x1', node0.x() + node0.width())
            .attr('y1', node0.y() + node0.innerHeight() / 2)
            .attr('x2', node0.x())
            .attr('y2', node0.y() + node0.innerHeight() / 2)
            .attr('stroke-width', 3)
            .attr('stroke', '#999')

        textsvg
            .append('text')
            .attr('x', node0.x() + node0.width())
            .attr('y', node0.y() + 5)
            .attr('text-anchor', 'middle')
            .text('innerHeight')
            .attr('stroke-width', 2)
            .attr('stroke', 'white')

        textsvg
            .append('text')
            .attr('x', node0.x() + node0.width())
            .attr('y', node0.y() + 5)
            .attr('text-anchor', 'middle')
            .text('innerHeight')
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>
