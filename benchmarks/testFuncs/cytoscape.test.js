/**
 * @author Jiacheng Pan<panjiacheng@zju.edu.cn>
 */

import cytoscape from '../lib/cytoscape.min.js'

function makeCytoscapeData(data) {
    const res = []
    data.nodes.forEach((n) => {
        res.push({
            data: {
                id: String(n.id)
            },
            group: 'nodes'
        })
    })
    let edgeId = 1e7
    data.links.forEach((l) => {
        res.push({
            group: 'edges',
            data: {
                id: edgeId++,
                source: String(l.source),
                target: String(l.target)
            }
        })
    })
    return res
}

export default async function test(testCase) {
    const { container, width, height, data } = testCase

    const cy = cytoscape({
        container: container,
        elements: makeCytoscapeData(data),
        zoomingEnabled: false,
        userZoomingEnabled: false,
        panningEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
        style: [
            // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#666'
                }
            },
            {
                selector: 'edge',
                style: {
                    width: 3,
                    'line-color': '#ccc'
                }
            }
        ],
        layout: {
            name: 'grid'
        }
    })

    await testCase.run(() => {
        cy.nodes().forEach((n) => {
            n.position({
                x: Math.random() * width,
                y: Math.random() * height
            })
        })
    })
}
