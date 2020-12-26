<script>
const id = 'node-rect'
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
                    y: 100
                },
                {
                    id: '1',
                    x: Math.round(width / 40) * 30,
                    y: 100
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
                    fill: { r: 230 / 255, g: 28 / 255, b: 72 / 255, a: 0.85 },
                    strokeColor: { r: 1, g: 1, b: 1, a: 0.85 }
                }
            },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 }
        })
        netv.data(testData)

        const canvas = d3.select(div).select('canvas')
        canvas.attr('style', canvas.attr('style') + 'position: relative; left: 0; top: 0;')

        netv.getNodeById('0').shape('rect')
        netv.getNodeById('0').width(60)
        netv.getNodeById('0').height(40)
        netv.getNodeById('0').strokeWidth(0)

        netv.getNodeById('1').shape('rect')
        netv.getNodeById('1').width(60)
        netv.getNodeById('1').height(40)
        netv.getNodeById('1').strokeWidth(20)

        netv.draw()
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>
