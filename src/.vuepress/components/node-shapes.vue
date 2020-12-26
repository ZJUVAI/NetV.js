<script>
const id = 'node-shapes'
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
                    x: Math.round(width / 50) * 10,
                    y: 100,
                    style: { shape: 'circle' }
                },
                {
                    id: '1',
                    x: Math.round(width / 50) * 20,
                    y: 100,
                    style: { shape: 'rect' }
                },
                {
                    id: '2',
                    x: Math.round(width / 50) * 30,
                    y: 100,
                    style: { shape: 'triangle' }
                },
                {
                    id: '3',
                    x: Math.round(width / 50) * 40,
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
                    fill: { r: 230 / 255, g: 28 / 255, b: 72 / 255, a: 0.85 },
                    strokeColor: { r: 1, g: 1, b: 1, a: 0.85 },
                    r: 30,
                    strokeWidth: 20,
                    width: 60,
                    height: 60,
                    vertexAlpha: { x: -30, y: 30 },
                    vertexBeta: { x: 0, y: -30 },
                    vertexGamma: { x: 30, y: 30 },
                    innerWidth: 40,
                    innerHeight: 40
                }
            },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 }
        })
        netv.data(testData)
        netv.draw()

        const canvas = d3.select(div).select('canvas')
        canvas.attr('style', canvas.attr('style') + 'position: relative; left: 0; top: 0;')
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>
