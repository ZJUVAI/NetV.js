import * as d3 from './d3.v4.min.js'

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 500 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

// Read the data
export function drawLineChart(container, data) {
    // append the svg object to the body of the page
    const svg = d3
        .select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Add X axis --> it is a size format
    const x = d3
        .scaleLog()
        .base(2)
        .domain(
            d3.extent(data, function(d) {
                return d.size
            })
        )
        .range([0, width])
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))

    // Add Y axis
    const y = d3
        .scaleLinear()
        .domain([
            0,
            d3.max(data, function(d) {
                return Number(d.value)
            })
        ])
        .range([height, 0])
    svg.append('g').call(d3.axisLeft(y))

    // Add the line
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr(
            'd',
            d3
                .line()
                .x(function(d) {
                    return x(d.size)
                })
                .y(function(d) {
                    return y(d.value)
                })
        )
}
