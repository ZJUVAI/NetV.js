/* eslint-disable no-undef */
/* eslint-disable one-var */
/* eslint-disable no-var */
/**
 * Graphology ForceAtlas2 Layout Webworker
 * ========================================
 *
 * Web worker able to run the layout in a separate thread.
 */

export default function worker() {
    var NODES, LINKS, SETTINGS

    self.addEventListener('message', function (event) {
        var data = event.data

        if (data.nodes) NODES = new Float32Array(data.nodes)

        if (data.links) LINKS = new Float32Array(data.links)

        if (data.settings) SETTINGS = data.settings

        // Running the iteration
        iterate(SETTINGS, NODES, LINKS)

        // Sending result to supervisor
        self.postMessage(
            {
                nodes: NODES.buffer
            },
            [NODES.buffer]
        )

        console.log(SETTINGS.byteLength)
    })
}
