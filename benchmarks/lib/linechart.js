/* eslint-disable no-invalid-this */
import * as d3 from './d3.v5.min.js'

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 500 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

const legendsWidth = 200
const fontSize = 12

const getElementCountFromName = (str) =>
    Number(str.split('&')[1].split(':')[1]) + Number(str.split('&')[0].split(':')[1])

// Read the data
export async function drawLineChart(container, data) {
    const itemNames = Object.keys(data)
    const testCaseNames = Array.from(
        Object.values(data).reduce((set, row) => {
            Object.keys(row).forEach((name) => {
                set.add(name)
            })
            return set
        }, new Set())
    )
    testCaseNames.sort((a, b) => getElementCountFromName(a) - getElementCountFromName(b))

    // append the svg object to the body of the page
    const svg = d3
        .select(container)
        .append('svg')
        .attr('style', 'display: block;')
        .attr('width', width + margin.left + margin.right + legendsWidth)
        .attr('height', height + margin.top + margin.bottom + (fontSize + 2) * testCaseNames.length)

    const chart = svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Add X axis --> it is a size format

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
    const maxFPS = d3.max(Object.values(data), (row) => {
        // row: {'nodes:xxx&link:xxx': xxx, 'nodes:yyy&link:yyy': yyy, ...}
        return d3.max(Object.values(row))
    })

    const xDomain = [0, d3.max(testCaseNames, getElementCountFromName)]

    const yDomain = [0, Math.ceil(maxFPS / 10) * 10]

    // const x = d3.scaleLog().base(2).domain(xDomain).range([0, width])
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
    xAxisG
        .selectAll('line.calibration')
        .data(testCaseNames)
        .enter()
        .append('line')
        .classed('calibration', true)
        .attr('x1', (d) => x(getElementCountFromName(d)))
        .attr('x2', (d) => x(getElementCountFromName(d)))
        .attr('y1', height - 5)
        .attr('y2', height)
        .attr('stroke', 'black')

    xAxisG
        .selectAll('text.calibration')
        .data(testCaseNames.reverse())
        .enter()
        .append('text')
        .attr('x', (d) => x(getElementCountFromName(d)))
        .attr('y', (d, i) => height + (fontSize + 2) * (1 + i))
        .text((d) => d)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .attr('font-size', fontSize)

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
            yAxisG
                .append('line')
                .attr('y1', y(yCalibration))
                .attr('y2', y(yCalibration))
                .attr('x1', 0)
                .attr('x2', -5)
                .attr('stroke', 'black')
            yAxisG
                .append('text')
                .attr('x', -15)
                .attr('y', y(yCalibration) + 3)
                .text(yCalibration)
                .attr('fill', 'black')
                .attr('text-anchor', 'middle')
                .attr('font-size', fontSize)
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
            const points = Object.entries(d[1]).map(([key, value]) => [
                getElementCountFromName(key),
                value
            ])
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
                .attr('font-size', fontSize)
        })
}
