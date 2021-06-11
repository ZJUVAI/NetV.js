import { Callback, Data } from 'src/interfaces'
import Layout from '../abstract-layout'
import * as helpers from './helpers'
import iterate from './iterate'
import worker from './worker'

interface ForceAtlas2Param {
    width: number
    height: number
    iterations?: number //if run layout without using worker, it defines iteration times, default as 100
    useWorker?: boolean //defines use worker or not, default as false
    linLogMode?: boolean
    outboundAttractionDistribution?: boolean
    adjustSizes?: boolean
    edgeWeightInfluence?: number
    scalingRatio?: number
    strongGravityMode?: boolean
    gravity?: number
    slowDown?: number
    barnesHutOptimize?: boolean
    barnesHutTheta?: number
}
export default class ForceAtlas2Layout implements Layout {
    private _data: Data
    private _param: ForceAtlas2Param = {
        width: 1,
        height: 1,
        iterations: 100,
        useWorker: false,
        linLogMode: false,
        outboundAttractionDistribution: false,
        adjustSizes: false,
        edgeWeightInfluence: 0,
        scalingRatio: 1,
        strongGravityMode: false,
        gravity: 1,
        slowDown: 1,
        barnesHutOptimize: false,
        barnesHutTheta: 0.5
    }
    private _onStopCallback: Callback
    private _onEachCallback: Callback
    private _worker: Worker
    private _matrices: {
        nodes: Float32Array
        links: Float32Array
    }
    private _running: boolean = false
    private _stopped: boolean = false
    private _handleMessage = (event: MessageEvent) => {
        if (!this._running) return
        let matrix = new Float32Array(event.data.nodes)
        helpers.assignLayoutChanges(this._data, matrix)
        this._onEachCallback?.(this._data)
        this._matrices.nodes = matrix
        this.askForIteractions()
    }
    private spawnWorker = () => {
        if (this._worker) {
            this._worker.terminate()
        }
        this._worker = helpers.createWorker(worker, [iterate])
        this._worker.addEventListener('message', this._handleMessage)
        if (this._running) {
            this._running = false
            this.start()
        }
    }
    private askForIteractions = (withLinks: boolean = false) => {
        let matrices = this._matrices
        let payload = {
            settings: this._param,
            nodes: matrices.nodes.buffer,
            links: undefined
        }
        let buffers = [matrices.nodes.buffer]
        if (withLinks) {
            payload.links = matrices.links.buffer
            buffers.push(matrices.links.buffer)
        }
        this._worker.postMessage(payload, buffers)
        return this
    }
    public start() {
        if (this._stopped) {
            throw new Error('netv-layout-forceatlas2/worker.start: layout was stopped.')
        }
        if (this._running) return this
        this._running = true
        if (this._param.useWorker) {
            this._matrices = helpers.graphToByteArrays(this._data)
            this.askForIteractions(true)
        } else {
            this.synchronousLayout()
        }
        return this
    }
    public stop() {
        if (!this._param.useWorker) return this
        if (this._stopped) return this
        this._running = false
        this._stopped = true
        this._matrices = null
        this._worker.terminate()
        this._onStopCallback?.(this._data)
    }
    public resume() {
        if (!this._param.useWorker) return this
        this.start()
    }
    public pause() {
        if (!this._param.useWorker) return this
        this._running = false
        return this
    }
    public onEach(callback: Callback) {
        this._onEachCallback = callback
    }
    public data(data?: Data) {
        if (data) {
            let mapper = {}
            data.links.forEach((link) => {
                if (!mapper[link.source]) {
                    mapper[link.source] = 1
                } else mapper[link.source] += 1
                if (!mapper[link.target]) {
                    mapper[link.target] = 1
                } else mapper[link.target] += 1
            })
            data.nodes.forEach((node) => {
                node.degree = mapper[node.id]
                return node
            })
            this._data = data
            if (this._param.useWorker) {
                this._matrices = helpers.graphToByteArrays(this._data)
                this.spawnWorker()
            }
        } else return this._data
    }
    public parameters(param?: ForceAtlas2Param) {
        if (param) {
            this._param = Object.assign({}, this._param, param)
        } else return this._param
    }
    public onStop(callback: Callback) {
        this._onStopCallback = callback
    }
    /**
     * Graphology ForceAtlas2 Layout Default Settings
     * Without Using Web Worker
     * ===============================================
     */
    private synchronousLayout() {
        var iterations = this._param.iterations

        if (iterations <= 0)
            throw new Error(
                'netv-layout-forceatlas2: you should provide a positive number of iterations.'
            )

        // Validating settings
        var settings = helpers.assign({}, this._param),
            validationError = helpers.validateSettings(settings)

        if (validationError) throw new Error('netv-layout-forceatlas2: ' + validationError.message)

        // Building matrices
        var matrices = helpers.graphToByteArrays(this._data),
            i

        // Iterating
        let times = 0
        let interval = setInterval(() => {
            iterate(settings, matrices.nodes, matrices.links)
            helpers.assignLayoutChanges(this._data, matrices.nodes)
            this._onEachCallback?.(this._data)
            times++
            if (times === iterations) clearInterval(interval)
        }, 0)
    }

    /**
     * Function returning sane layout settings for the given graph.
     * @param data
     * @returns
     */
    inferSettings(data: Data) {
        var order = data.nodes.length

        return {
            barnesHutOptimize: order > 2000,
            strongGravityMode: true,
            gravity: 0.05,
            scalingRatio: 10,
            slowDown: 1 + Math.log(order)
        }
    }
}
