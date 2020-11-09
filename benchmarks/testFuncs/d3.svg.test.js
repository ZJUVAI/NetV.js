/**
 * @author Jiacheng Pan<panjiacheng@zju.edu.cn>
 */

import * as d3 from '../lib/d3.v5.min.js'

export default async function test(testCase) {
    const { container, width, height, data } = testCase

    const svg = d3.select(container).append('svg')
    svg.attr('width', width)
    svg.attr('height', height)

    const nodeMap = {}
    data.nodes.forEach((node) => {
        nodeMap[node.id] = node
    })

    data.links.forEach((link) => {
        link.source = nodeMap[link.source]
        link.target = nodeMap[link.target]
    })

    const links = svg
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .attr('stroke', (d) => {
            return '#a0a0a0'
        })
        .attr('stroke-width', (d) => {
            return d.strokeWidth
        })

    const nodes = svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(data.nodes)
        .enter()
        .append('g')

    nodes
        .append('circle')
        .attr('r', 5)
        .attr('fill', (d) => {
            return '#ff0000'
        })

    function refresh() {
        data.nodes.forEach((n) => {
            n.x = Math.random() * width
            n.y = Math.random() * height
        })

        links
            .attr('x1', function (d) {
                return d.source.x
            })
            .attr('y1', function (d) {
                return d.source.y
            })
            .attr('x2', function (d) {
                return d.target.x
            })
            .attr('y2', function (d) {
                return d.target.y
            })

        nodes.attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')'
        })
    }

    await testCase.run(refresh)
}
