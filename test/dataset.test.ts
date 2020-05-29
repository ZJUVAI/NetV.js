/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test build-in dataset load
 */

import NetV from '../src'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document

test('build-in dataset', () => {
    const netv = new NetV(document.createElement('div'))
    netv.data(netv.dataset.miserables)

    expect(netv.data().nodes.length).toEqual(77)
    expect(netv.data().links.length).toEqual(234)

    const n7 = netv.getNodeById('Cravatte')
    const l7 = netv.getLinkByEnds('Cravatte', 'Myriel')

    expect(n7).toBe({ id: 'Cravatte', group: 1, x: -12.194453649142762, y: -23.479678451778437 })
    expect(l7).toBe({ source: 'Cravatte', target: 'Myriel', value: 1 })
})
