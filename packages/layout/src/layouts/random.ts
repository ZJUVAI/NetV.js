/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:41:02
 * @modify date 2021-06-08 15:41:02
 * @desc [description]
 */
import Layout from './abstract-layout'
import { Data, Callback } from '../interfaces'

interface RandomParam {
    width: number
    height: number
}

class Random implements Layout {
    private _data: Data
    private _param: RandomParam = {
        width: 1,
        height: 1
    }
    private _onStopCallback: Callback
    public start() {
        this._data.nodes?.forEach((node) => {
            node.x = Math.random() * this._param.width
            node.y = Math.random() * this._param.height
        })

        this._onStopCallback?.(this._data)
    }
    public restart() {
        this.start()
    }
    public data(data?: Data) {
        if (data) this._data = data
        else return this._data
    }
    public parameters(param?: RandomParam) {
        if (param) this._param = { ...this._param, ...param }
        else return this._param
    }
    public onStop(callback: Callback) {
        this._onStopCallback = callback
    }
}

export default Random
