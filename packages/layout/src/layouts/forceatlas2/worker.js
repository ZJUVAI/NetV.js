/* eslint-disable no-undef */
/**
 * NetV ForceAtlas2 Layout Webworker
 * ========================================
 *
 * Web worker able to run the layout in a separate thread.
 * https://github.com/graphology/graphology-layout-forceatlas2
 */

export default function worker() {
    let NODES
    let LINKS
    let SETTINGS

    self.addEventListener('message', function (event) {
        let data = event.data

        if (data.nodes) NODES = new Float32Array(data.nodes)

        if (data.links) LINKS = new Float32Array(data.links)

        if (data.settings) SETTINGS = data.settings

        // Running the iteration
        iterate(SETTINGS, NODES, LINKS)

        // Sending result to supervisor
        self.postMessage({
            nodes: NODES.buffer
        })
    })
}
