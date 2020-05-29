/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test build-in dataset load
 */

import NetV from '../src'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document

test('build-in dataset load', () => {
    const netv = new NetV(document.createElement('div'))
    netv.data(netv.loadDataset('miserables'))

    expect(netv.data().nodes.length).toEqual(77)
    expect(netv.data().links.length).toEqual(254)

    const spy = jest.spyOn(console, 'error')
    netv.loadDataset('not-exist')
    expect(spy).toHaveBeenCalledWith('NetV does not have build-in dataset: not-exist')
})

test('dataset load value', () => {
    const netv = new NetV(document.createElement('div'))
    netv.data(netv.loadDataset('miserables'))

    const n7 = netv.getNodeById('Cravatte')
    const l7 = netv.getLinkByEnds('Cravatte', 'Myriel')

    expect(n7.x).toBe(-12.194453649142762)
    expect(l7.value).toBe(1)
})
