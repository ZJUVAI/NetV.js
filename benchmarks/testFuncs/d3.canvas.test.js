/**
 * @author Jiacheng Pan<panjiacheng@zju.edu.cn>
 */

import * as d3 from '../lib/d3.v5.min.js'

export default async function test(testCase) {
    const { container, width, height, data } = testCase

    const canvas = d3.select(container).append('canvas')
    canvas.attr('width', width)
    canvas.attr('height', height)

    const context = canvas.node().getContext('2d')

    const nodeMap = {}
    data.nodes.forEach((node) => {
        nodeMap[node.id] = node
    })

    data.links.forEach((link) => {
        link.source = nodeMap[link.source]
        link.target = nodeMap[link.target]
    })

    function refresh() {
        context.clearRect(0, 0, width, height)

        data.nodes.forEach((node) => {
            node.x = Math.random() * width
            node.y = Math.random() * height
        })

        // draw links
        context.strokeStyle = '#ccc'
        context.beginPath()
        data.links.forEach(function (d) {
            context.moveTo(d.source.x, d.source.y)
            context.lineTo(d.target.x, d.target.y)
        })
        context.stroke()

        // draw nodes
        context.fillStyle = 'steelblue'
        context.beginPath()
        data.nodes.forEach(function (d) {
            context.moveTo(d.x, d.y)
            context.arc(d.x, d.y, 4.5, 0, 2 * Math.PI)
        })
        context.fill()
    }

    await testCase.run(refresh)
}
