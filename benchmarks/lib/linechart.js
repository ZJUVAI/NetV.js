import * as d3 from './d3.v5.min.js'

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 500 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

// The table generation function
function tabulate(container, data, columnNames) {
    var table = d3.select(container).append('table').attr('style', 'margin-left: 250px'),
        thead = table.append('thead'),
        tbody = table.append('tbody')

    // append the header row
    thead
        .append('tr')
        .selectAll('th')
        .data(columnNames)
        .enter()
        .append('th')
        .text(function (column) {
            return column
        })

    // create a row for each object in the data
    var rows = tbody.selectAll('tr').data(data).enter().append('tr')

    // create a cell in each row for each column
    var cells = rows
        .selectAll('td')
        .data(function (row) {
            return columnNames.map(function (column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .attr('style', 'font-family: Courier') // sets the font style
        .html(function (d) {
            return d.value
        })

    return table
}

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
    const xDomain = d3.extent(data, (d) => d.size)
    xDomain[0] = Math.pow(10, parseInt(xDomain[0].toString().length - 1))
    xDomain[1] = Math.pow(10, parseInt((xDomain[1] - 1).toString().length))
    console.log(xDomain)
    const x = d3.scaleLog().base(2).domain(xDomain).range([0, width])

    // draw axis
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', height)
        .attr('y2', height)
        .attr('stroke', 'black')
    let calibration = 1
    while (calibration <= x.domain()[1]) {
        if (calibration >= x.domain()[0]) {
            svg.append('line')
                .attr('x1', x(calibration))
                .attr('x2', x(calibration))
                .attr('y1', height - 5)
                .attr('y2', height)
                .attr('stroke', 'black')
            svg.append('text')
                .attr('x', x(calibration))
                .attr('y', height + 15)
                .text(calibration)
                .attr('stroke', 'black')
        }
        calibration *= 10
    }

    // Add Y axis
    const y = d3
        .scaleLinear()
        .domain([
            0,
            d3.max(data, function (d) {
                return Number(d.value)
            })
        ])
        .range([height, 0])

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
                .x(function (d) {
                    return x(d.size)
                })
                .y(function (d) {
                    return y(d.value)
                })
        )

    tabulate(container, data, ['size', 'value'])
}
