/* eslint-disable no-invalid-this */
import * as d3 from './d3.v5.min.js'

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 500 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

const legendsWidth = 100

const getLinkCount = (str) => Number(str.split('&')[1].split(':')[1])

// Read the data
export async function drawLineChart(container, data) {
    // data = await d3.json('./result.json')

    // append the svg object to the body of the page
    const svg = d3
        .select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right + legendsWidth)
        .attr('height', height + margin.top + margin.bottom)

    const chart = svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Add X axis --> it is a size format
    const itemNames = Object.keys(data)
    const colors = [
        '#1b9e77',
        '#d95f02',
        '#7570b3',
        '#e7298a',
        '#66a61e',
        '#e6ab02',
        '#a6761d',
        '#666666'
    ]
    const colorMap = itemNames.reduce((map, name) => {
        map[name] = colors.pop()
        return map
    }, {})
    const linksCountDomain = Object.values(data).reduce(
        (result, row) => {
            const domain = d3.extent(
                Object.keys(row).map(getLinkCount) // 'nodes:xxx&links:xxx'
            )
            return domain.map((_, i) => {
                if (i === 0) {
                    return Math.min(domain[i], result[i])
                } else {
                    return Math.max(domain[i], result[i])
                }
            })
        },
        [Infinity, -Infinity]
    )
    const maxFPS = d3.max(Object.values(data), (row) => {
        // row: {'nodes:xxx&link:xxx': xxx, 'nodes:yyy&link:yyy': yyy, ...}
        return d3.max(Object.values(row))
    })

    const xDomain = linksCountDomain

    const yDomain = [0, Math.ceil(maxFPS / 10) * 10]

    const x = d3.scaleLinear().domain(xDomain).range([0, width])
    const y = d3.scaleLinear().domain(yDomain).range([height, 0])

    // draw x axis
    const xAxisG = chart.append('g').attr('id', 'x-aixs')
    xAxisG
        .append('line')
        .attr('x1', 0)
        .attr('y1', height)
        .attr('x2', width + 10)
        .attr('y2', height)
        .attr('stroke', 'black')
    xAxisG
        .append('line')
        .attr('x1', width + 10)
        .attr('y1', height)
        .attr('x2', width + 10 - 7)
        .attr('y2', height - 5)
        .attr('stroke', 'black')
    xAxisG
        .append('line')
        .attr('x1', width + 10)
        .attr('y1', height)
        .attr('x2', width + 10 - 7)
        .attr('y2', height + 5)
        .attr('stroke', 'black')
    // draw x axis calibrations
    let xCalibration = 1
    while (xCalibration < x.domain()[1]) {
        if (xCalibration > x.domain()[0]) {
            xAxisG
                .append('line')
                .attr('x1', x(xCalibration))
                .attr('x2', x(xCalibration))
                .attr('y1', height - 5)
                .attr('y2', height)
                .attr('stroke', 'black')
            xAxisG
                .append('text')
                .attr('x', x(xCalibration))
                .attr('y', height + 15)
                .text(xCalibration.toExponential())
                .attr('fill', 'black')
                .attr('text-anchor', 'middle')
                .attr('font-size', 10)
        }
        // calibration *= String(calibration)[0] === '2' ? 5 : 2
        xCalibration *= 10
    }

    // draw y axis
    const yAxisG = chart.append('g').attr('id', 'y-aixs')
    yAxisG
        .append('line')
        .attr('x1', 0)
        .attr('y1', height)
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('stroke', 'black')
    yAxisG
        .append('line')
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('x2', -5)
        .attr('y2', 7)
        .attr('stroke', 'black')
    yAxisG
        .append('line')
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('x2', 5)
        .attr('y2', 7)
        .attr('stroke', 'black')
    // draw x axis calibrations
    let yCalibration = 0
    while (yCalibration < y.domain()[1]) {
        if (yCalibration > y.domain()[0]) {
            xAxisG
                .append('line')
                .attr('y1', y(yCalibration))
                .attr('y2', y(yCalibration))
                .attr('x1', 0)
                .attr('x2', -5)
                .attr('stroke', 'black')
            xAxisG
                .append('text')
                .attr('x', -15)
                .attr('y', y(yCalibration) + 3)
                .text(yCalibration)
                .attr('fill', 'black')
                .attr('text-anchor', 'middle')
                .attr('font-size', 10)
        }
        // calibration *= String(calibration)[0] === '2' ? 5 : 2
        yCalibration += 10
    }

    chart
        .selectAll('path')
        .data(Object.entries(data))
        .enter()
        .append('path')
        .each(function (d) {
            const points = Object.entries(d[1]).map(([key, value]) => [getLinkCount(key), value])
            points.sort((a, b) => a[0] - b[0])

            // eslint-disable-next-line no-invalid-this
            d3.select(this)
                .datum(points)
                .attr('fill', 'none')
                .attr('stroke', colorMap[d[0]])
                .attr('stroke-width', d[0].indexOf('NetV') >= 0 ? 3 : 1.5)
                .attr(
                    'd',
                    d3
                        .line()
                        .x((d) => x(d[0]))
                        .y((d) => y(d[1]))
                )
        })

    const legends = svg
        .append('g')
        .attr('id', 'legends')
        .attr('transform', `translate(${width + margin.left + margin.right}, ${margin.top})`)

    const legendsGap = 20
    legends
        .selectAll('g')
        .data(itemNames)
        .enter()
        .append('g')
        .attr('transform', (d, i) => 'translate(0,' + legendsGap * i + ')')
        .each(function (d) {
            // eslint-disable-next-line no-invalid-this
            const g = d3.select(this)

            const length = 40
            g.append('line')
                .attr('x1', 0)
                .attr('y1', legendsGap / 2)
                .attr('x2', length)
                .attr('y2', legendsGap / 2)
                .attr('stroke', colorMap[d])
                .attr('stroke-width', d.indexOf('NetV') >= 0 ? 3 : 1.5)

            g.append('text')
                .attr('x', length + 10)
                .attr('y', legendsGap / 2 + 5)
                .text(d)
                .attr('fill', 'black')
                .attr('font-size', 10)
        })
}
