/**
 * @author Jiacheng Pan<panjiacheng@zju.edu.cn>
 */

import { sigma as Sigma } from '../lib/sigma.require.js'

export default async function test(testCase) {
    const { container, width, height, data } = testCase

    const sigma = new Sigma({
        renderers: [
            {
                container: container,
                type: Sigma.renderers.webgl
            }
        ]
    })

    // Then, let's add some data to display:
    data.nodes.forEach((n, i) => {
        sigma.graph.addNode({
            id: n.id,
            x: n.x,
            y: n.y,
            size: 3,
            color: '#666'
        })
    })

    data.links.forEach((l, i) => {
        sigma.graph.addEdge({
            id: i,
            source: l.source,
            target: l.target
        })
    })

    await testCase.run(() => {
        sigma.graph.nodes().forEach((n) => {
            n.x = Math.random() * width
            n.y = Math.random() * height
        })
        sigma.refresh()
    })
}
