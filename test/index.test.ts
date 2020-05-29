/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description index.ts test
 */

import NetV from '../src/index'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document

/**
 * constructor test
 */

test('constructor: container', () => {
    expect(() => {
        // @ts-ignore
        const netV = new NetV()
    }).toThrowError(new Error('Container should be specified as a div element!'))

    expect(() => {
        // @ts-ignore
        const netV = new NetV(document.createElement('canvas'))
    }).toThrowError(new Error('Container should be specified as a div element!'))

    const netV = new NetV(document.createElement('div'))
})

/**
 * ! normal cases test block
 */
test('normal cases: method data', () => {
    let netV = new NetV(document.createElement('div'))
    netV.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
            { source: '3', target: '1' }
        ]
    })
    expect(netV.$_id2node.size).toBe(3)
    expect(netV.getNodeById('2').id()).toBe('2')
    expect(netV.$_ends2link.size).toBe(3)
    const link = netV.getLinkByEnds('2', '3')
    expect([link.source(), link.target()]).toContain(netV.getNodeById('2'))
})

test('normal cases: addNode/addLink', () => {
    // add node into a empty class
    let netV = new NetV(document.createElement('div'))
    const node1 = netV.addNode({
        id: '1'
    })
    expect(node1).not.toBeFalsy() // not null or undefined
    expect(netV.$_id2node.size).toBe(1)
    expect(netV.getNodeById('1')).toBe(node1)

    netV = new NetV(document.createElement('div'))
    netV.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
            { source: '3', target: '1' }
        ]
    })
    netV.addNode({
        id: '4'
    })
    netV.addLink({
        source: '1',
        target: '4'
    })
    netV.addLink({
        source: '3',
        target: '4'
    })
    expect(netV.$_id2node.size).toBe(4)
    expect(netV.getNodeById('4').id()).toBe('4')

    expect(netV.$_ends2link.size).toBe(5)
    const link = netV.getLinkByEnds('1', '4')
    expect([link.source(), link.target()]).toContain(netV.getNodeById('4'))
})

test('normal cases: wipe', () => {
    let netV = new NetV(document.createElement('div'))
    netV.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
            { source: '3', target: '1' }
        ]
    })
    netV.wipe()

    expect(netV.$_id2node.size).toBe(0)
    expect(netV.getNodeById('2')).toBeUndefined()

    expect(netV.$_ends2link.size).toBe(0)
    expect(netV.getLinkByEnds('1', '2')).toBeUndefined()

    // add data again
    netV.data({
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        links: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
            { source: '3', target: '1' }
        ]
    })
    expect(netV.$_id2node.size).toBe(3)
    expect(netV.getNodeById('2').id()).toBe('2')
    expect(netV.$_ends2link.size).toBe(3)
    const link = netV.getLinkByEnds('2', '3')
    expect([link.source(), link.target()]).toContain(netV.getNodeById('2'))
})

/**
 * ! error cases test block
 */
test('error cases: method data', () => {
    // without any substantial data
    let netV = new NetV(document.createElement('div'))
    netV.data({
        nodes: [],
        links: []
    })
    expect(netV.$_id2node.size).toBe(0)
    expect(netV.$_ends2link.size).toBe(0)

    // with a link connected two nonexist node
    netV = new NetV(document.createElement('div'))
    expect(() => {
        netV.data({
            nodes: [],
            links: [{ source: '1', target: '2' }]
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(0)
    expect(netV.$_ends2link.size).toBe(0)

    // with a link induced by a nonexist node
    netV = new NetV(document.createElement('div'))
    expect(() => {
        netV.data({
            nodes: [{ id: '1' }],
            links: [{ source: '1', target: '2' }]
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(1)
    expect(netV.$_ends2link.size).toBe(0)

    // with two duplicate nodes
    netV = new NetV(document.createElement('div'))
    expect(() => {
        netV.data({
            nodes: [{ id: '1' }, { id: '1' }],
            links: [{ source: '1', target: '2' }]
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(1)
    expect(netV.$_ends2link.size).toBe(0)

    // with two duplicate links
    netV = new NetV(document.createElement('div'))
    expect(() => {
        netV.data({
            nodes: [{ id: '1' }],
            links: [
                { source: '1', target: '2' },
                { source: '2', target: '1' }
            ]
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(1)
    expect(netV.$_ends2link.size).toBe(0)
})

test('error cases: method addNode', () => {
    // add a node with an invalid id
    let netV = new NetV(document.createElement('div'))
    expect(() => {
        netV.addNode({
            id: ''
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(0)
    expect(netV.getNodeById('')).toBeUndefined()

    expect(() => {
        netV.addNode({
            id: undefined
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(0)
    expect(netV.getNodeById(undefined)).toBeUndefined()

    expect(() => {
        netV.addNode({
            id: null
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(0)
    expect(netV.getNodeById(null)).toBeUndefined()

    // add a node with a duplicate id
    netV.addNode({
        id: '1'
    })
    const cacheNode = netV.getNodeById('1')
    expect(() => {
        netV.addNode({
            id: '1'
        })
    }).toThrow(Error)
    expect(netV.$_id2node.size).toBe(1)
    expect(netV.getNodeById('1')).toBe(cacheNode)
})

test('error cases: method addLink', () => {
    let netV = new NetV(document.createElement('div'))
    // inject a link into an empty NetV instance
    expect(() => {
        netV.addLink({
            source: '1',
            target: '2'
        })
    }).toThrow(Error)
    expect(netV.$_ends2link.size).toBe(0)
    expect(netV.getLinkByEnds('1', '2')).toBeFalsy()
    expect(netV.getNodeById('1')).toBeFalsy()

    netV.addNode({ id: '1' })

    // inject a link with invalid source id into an empty NetV instance
    expect(() => {
        netV.addLink({
            source: '',
            target: '1'
        })
    }).toThrow(Error)
    expect(netV.$_ends2link.size).toBe(0)
    expect(netV.getLinkByEnds('', '1')).toBeFalsy()
    expect(netV.getNodeById('')).toBeFalsy()

    // inject a self loop
    expect(() => {
        netV.addLink({
            source: '1',
            target: '1'
        })
    }).toThrow(Error)
    expect(netV.$_ends2link.size).toBe(0)
    expect(netV.getLinkByEnds('1', '1')).toBeFalsy()

    netV.addNode({ id: '2' })
    const link12 = netV.addLink({
        source: '1',
        target: '2'
    })

    // inject duplicate link
    expect(() => {
        netV.addLink({
            source: '1',
            target: '2'
        })
    }).toThrow(Error)
    expect(netV.$_ends2link.size).toBe(1)
    expect(netV.getLinkByEnds('1', '2')).toBe(link12)
    expect(() => {
        netV.addLink({
            source: '2',
            target: '1'
        })
    }).toThrow(Error)
    expect(netV.$_ends2link.size).toBe(1)
    expect(netV.getLinkByEnds('2', '1')).toBe(link12)
})
