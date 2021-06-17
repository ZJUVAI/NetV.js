/**
 * Tobe implemented by Xiaoyu Yang
 */

import { Callback, Data } from 'src/interfaces'
import Layout from './abstract-layout'

interface ChaosParam {
    width: number
    height: number
    timeout?: number // refresh layout interval, default as 0
}
export default class Chaos implements Layout {
    private _data: Data // current data
    private _initData: Data // initialized data
    private _param: ChaosParam = {
        width: 1,
        height: 1,
        timeout: 0
    }
    private _onStopCallback: Callback
    private _onEachCallback: Callback
    private _timeInterval
    private _stopped = false
    public start() {
        if (this._stopped) return // should not start when the layout was stopped
        this._timeInterval = setInterval(this._timerHandler, this._param.timeout)
    }
    public restart() {
        if (!this._stopped) this.stop() // if this layout is not stopped, stop it
        this._stopped = false
        this._data = JSON.parse(JSON.stringify(this._initData))
        this.start()
    }
    public stop() {
        if (this._stopped) return // the layout has already been stopped
        this.pause()
        this._timeInterval = null
        this._stopped = true
        this._onStopCallback?.(this._data)
    }
    public resume() {
        if (this._timeInterval) return // should not resume when the layout was not paused
        this.start()
    }
    public pause() {
        if (this._timeInterval && typeof window !== 'undefined') {
            clearInterval(this._timeInterval)
        }
        this._timeInterval = null
    }
    public onEach(callback: Callback) {
        this._onEachCallback = callback
    }
    public data(data?: Data) {
        if (data) {
            this._initData = data
            this._data = JSON.parse(JSON.stringify(this._initData))
        } else return this._data
    }
    public parameters(param?: ChaosParam) {
        if (param) this._param = { ...this._param, ...param }
        else return this._param
    }
    public onStop(callback: Callback) {
        this._onStopCallback = callback
    }
    private _timerHandler = () => {
        this._data.nodes?.forEach((node) => {
            node.x = Math.random() * this._param.width
            node.y = Math.random() * this._param.height
        })
        this._onEachCallback?.(this._data)
    }
}
