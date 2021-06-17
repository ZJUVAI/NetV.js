/**
 * Graphology ForceAtlas2 Helpers
 * ===============================
 *
 * Miscellaneous helper functions.
 * https://github.com/graphology/graphology-layout-forceatlas2
 */

import { Data } from 'src/interfaces'

/**
 * Constants.
 */
const PPN = 10
const PPE = 3

/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
export function assign(target, ...object) {
    const objects = Array.prototype.slice.call(arguments).slice(1)
    let i
    let k
    let l

    for (i = 0, l = objects.length; i < l; i++) {
        if (!objects[i]) continue

        // eslint-disable-next-line guard-for-in
        for (k in objects[i]) target[k] = objects[i][k]
    }

    return target
}

// eslint-disable-next-line complexity
export function validateSettings(settings) {
    if ('linLogMode' in settings && typeof settings.linLogMode !== 'boolean')
        return { message: 'the `linLogMode` setting should be a boolean.' }

    if (
        'outboundAttractionDistribution' in settings &&
        typeof settings.outboundAttractionDistribution !== 'boolean'
    )
        return { message: 'the `outboundAttractionDistribution` setting should be a boolean.' }

    if ('adjustSizes' in settings && typeof settings.adjustSizes !== 'boolean')
        return { message: 'the `adjustSizes` setting should be a boolean.' }

    if (
        'edgeWeightInfluence' in settings &&
        typeof settings.edgeWeightInfluence !== 'number' &&
        settings.edgeWeightInfluence < 0
    )
        return { message: 'the `edgeWeightInfluence` setting should be a number >= 0.' }

    if (
        'scalingRatio' in settings &&
        typeof settings.scalingRatio !== 'number' &&
        settings.scalingRatio < 0
    )
        return { message: 'the `scalingRatio` setting should be a number >= 0.' }

    if ('strongGravityMode' in settings && typeof settings.strongGravityMode !== 'boolean')
        return { message: 'the `strongGravityMode` setting should be a boolean.' }

    if ('gravity' in settings && typeof settings.gravity !== 'number' && settings.gravity < 0)
        return { message: 'the `gravity` setting should be a number >= 0.' }

    if ('slowDown' in settings && typeof settings.slowDown !== 'number' && settings.slowDown < 0)
        return { message: 'the `slowDown` setting should be a number >= 0.' }

    if ('barnesHutOptimize' in settings && typeof settings.barnesHutOptimize !== 'boolean')
        return { message: 'the `barnesHutOptimize` setting should be a boolean.' }

    if (
        'barnesHutTheta' in settings &&
        typeof settings.barnesHutTheta !== 'number' &&
        settings.barnesHutTheta < 0
    )
        return { message: 'the `barnesHutTheta` setting should be a number >= 0.' }

    return null
}

export function graphToByteArrays(data: Data) {
    let order = data.nodes.length
    let size = data.links.length
    let index = {}
    let j

    let NodeMatrix = new Float32Array(order * PPN)
    let LinkMatrix = new Float32Array(size * PPE)

    // Iterate through nodes
    j = 0
    data.nodes.forEach(function (node, attr) {
        // Node index
        index[node.id] = j

        // Populating byte array
        NodeMatrix[j] = node.x
        NodeMatrix[j + 1] = node.y
        NodeMatrix[j + 2] = 0
        NodeMatrix[j + 3] = 0
        NodeMatrix[j + 4] = 0
        NodeMatrix[j + 5] = 0
        NodeMatrix[j + 6] = 1 + node.degree
        NodeMatrix[j + 7] = 1
        NodeMatrix[j + 8] = node.size || 1
        NodeMatrix[j + 9] = node.fixed ? 1 : 0
        j += PPN
    })

    // Iterate through edges
    j = 0
    data.links.forEach(function (edge) {
        // Populating byte array
        LinkMatrix[j] = index[edge.source]
        LinkMatrix[j + 1] = index[edge.target]
        LinkMatrix[j + 2] = edge.weight || 0
        j += PPE
    })

    return {
        nodes: NodeMatrix,
        links: LinkMatrix
    }
}

export function assignLayoutChanges(data: Data, NodeMatrix: Float32Array) {
    let i = 0
    data.nodes.forEach(function (node) {
        node.x = NodeMatrix[i]
        node.y = NodeMatrix[i + 1]

        i += PPN

        return node
    })
}

export function createWorker(fn: Function, imports?: Function[]): Worker {
    let xURL = window.URL || window.webkitURL
    let code = fn.toString()
    let parts = imports?.map((imp) => imp.toString())
    parts.push('(' + code + ').call(this);')
    let objectUrl = xURL.createObjectURL(new Blob(parts, { type: 'text/javascript' }))
    let worker = new Worker(objectUrl)
    xURL.revokeObjectURL(objectUrl)

    return worker
}
