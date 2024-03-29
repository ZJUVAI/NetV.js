import { Callback, Data, Node } from 'src/interfaces'
import Layout from '../abstract-layout'
import * as helpers from './helpers'
import iterate from './iterate'
import worker from './worker'

interface ForceAtlas2Param {
    iterations?: number // defines iteration times, default as 1000, useless if worker is used
    useWorker?: boolean // defines use worker or not, default as false, this parameter cannot be changed when using
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
export default class ForceAtlas2 implements Layout {
    private _data: Data // current data
    private _initData: Data // initialized data
    private _param: ForceAtlas2Param = {
        iterations: 1000,
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
    private _interval
    private _matrices: {
        nodes: Float32Array
        links: Float32Array
    }
    // the layout parameters has been initialized or not
    private _initialized = false
    // iteration times has been run
    private _iterations: number
    // the worker or the interval is running or not
    private _running = false
    // the layout is stopped or not
    private _stopped = false
    public start() {
        if (this._stopped) {
            throw new Error('@netv/layout/forceatlas2/worker.start: layout was stopped.')
        }
        if (this._running) return this
        this._running = true
        if (this._param.useWorker) {
            this._matrices = helpers.graphToByteArrays(this._data)
            this.askForIteractions()
        } else {
            this.synchronousLayout()
        }
        return this
    }
    public restart() {
        if (!this._stopped) this.stop() // if this layout is not stopped, stop it
        this._stopped = false
        this._data = JSON.parse(JSON.stringify(this._initData))
        this._iterations = 0
        this.start()
    }
    public stop() {
        if (this._stopped) return this // the layout has already been stopped
        this._running = false
        this._stopped = true
        this._matrices = null
        if (this._param.useWorker) {
            this._worker?.terminate()
            this._worker = null
        } else {
            clearInterval(this._interval)
            this._interval = null
        }
        this._onStopCallback?.(this._data)
    }
    public resume() {
        if (this._running) return this // the layout is running
        this.start()
    }
    public pause() {
        this._running = false
        if (this._interval) clearInterval(this._interval)
        return this
    }
    public onEach(callback: Callback) {
        this._onEachCallback = callback
    }
    public data(data?: Data) {
        if (data) {
            this._initData = this.setDegreeForNodes(data)
            this._data = JSON.parse(JSON.stringify(this._initData))
            if (this._param.useWorker) {
                this._matrices = helpers.graphToByteArrays(this._data)
                this.spawnWorker()
            }
        } else return this._data
    }
    public parameters(param?: ForceAtlas2Param) {
        if (param) {
            // useWorker should be locked when using
            if (this._initialized && !this._stopped) param.useWorker = this._param.useWorker
            else if (!this._initialized) this._initialized = true
            this._param = { ...this._param, ...param }
            this._iterations = 0 // initialize
            if (this._running) {
                if (this._param.useWorker) this._worker?.postMessage({ settings: this._param })
                // redefine the settings
                else this.synchronousLayout()
            }
        } else return this._param
    }
    public onStop(callback: Callback) {
        this._onStopCallback = callback
    }
    private setDegreeForNodes(data: Data) {
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
        return data
    }
    /**
     * NetV ForceAtlas2 Layout Runner
     * Using Web Worker
     * ===============================================
     */
    private askForIteractions = () => {
        let matrices = this._matrices
        let payload = {
            settings: this._param,
            nodes: matrices.nodes.buffer,
            links: matrices.links.buffer
        }
        this._worker.postMessage(payload)
        return this
    }
    private _handleMessage = (event: MessageEvent) => {
        if (!this._running) return
        let matrix = new Float32Array(event.data.nodes)
        helpers.assignLayoutChanges(this._data, matrix)
        this._onEachCallback?.(this._data)
        this._matrices.nodes = matrix
        this._iterations++
        if (this._iterations >= this._param.iterations) {
            this.stop()
        } else this._worker.postMessage({})
    }
    private spawnWorker = () => {
        if (this._worker) {
            this._worker.terminate()
        }
        this._worker = helpers.createWorker(worker, [iterate])
        this._worker.addEventListener('message', this._handleMessage)
        if (this._running) {
            this._running = false
        }
    }
    /**
     * NetV ForceAtlas2 Layout Runner
     * Without Using Web Worker
     * ===============================================
     */
    private synchronousLayout() {
        let iterations = this._param.iterations

        if (iterations <= 0)
            throw new Error(
                '@netv/layout/forceatlas2: you should provide a positive number of iterations.'
            )

        // Validating settings
        let settings = helpers.assign({}, this._param)
        let validationError = helpers.validateSettings(settings)

        if (validationError) throw new Error('@netv/layout/forceatlas2: ' + validationError.message)
        // Building matrices
        let matrices = helpers.graphToByteArrays(this._data)
        // Iterating
        if (this._interval) clearInterval(this._interval)
        this._interval = setInterval(() => {
            iterate(settings, matrices.nodes, matrices.links)
            helpers.assignLayoutChanges(this._data, matrices.nodes)
            this._onEachCallback?.(this._data)
            this._iterations++
            if (this._iterations >= this._param.iterations) {
                this.stop()
            }
        }, 0)
    }
}
