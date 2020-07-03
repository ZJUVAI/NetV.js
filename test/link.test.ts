/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description link.ts test
 */

import NetV from '../src/index'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document

// method sourceTarget() test
// normal cases test
describe('normal cases', () => {
    let netV1 = new NetV(document.createElement('div'))
    netV1.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' }
        ]
    })
    const link12 = netV1.getLinkByEnds('1', '2')
    test('getter: sourceTarget', () => {
        expect(link12.sourceTarget()).toEqual({
            source: netV1.getNodeById('1'),
            target: netV1.getNodeById('2')
        })
    })
    // change end nodes of a link
    test('setter: sourceTarget', () => {
        expect(
            link12.sourceTarget({
                source: netV1.getNodeById('1'),
                target: netV1.getNodeById('3')
            })
        ).toEqual({
            source: netV1.getNodeById('1'),
            target: netV1.getNodeById('3')
        })
        expect(netV1.getLinkByEnds('1', '3')).toBeDefined()
        expect(netV1.getLinkByEnds('1', '2')).toBeUndefined()
    })
})

// error cases test
describe('error cases', () => {
    let netV2 = new NetV(document.createElement('div'))
    netV2.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' }
        ]
    })
    const link23 = netV2.getLinkByEnds('2', '3')
    // change end nodes of a link
    test('setter: sourceTarget', () => {
        expect(
            link23.sourceTarget({
                source: netV2.getNodeById('3'),
                target: netV2.getNodeById('1')
            })
        ).toEqual({
            source: netV2.getNodeById('3'),
            target: netV2.getNodeById('1')
        })
        expect(netV2.getLinkByEnds('1', '3')).toBeDefined()
        expect(netV2.getLinkByEnds('2', '3')).toBeUndefined()
    })
})
