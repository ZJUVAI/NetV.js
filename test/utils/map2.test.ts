import Map2 from '../../src/utils/map2'

/**
 * @description Map2 is a Map data structure which maps two keys to one value.
 * @description for example, ['a', 'b']=>{ some value here }
 */

let map = new Map2([
    [['a', 'b'], 'ab'],
    [['b', 'a'], 'ba'],
    [['a', 'c'], 'ac']
])

// size
test('size', () => {
    expect(map.size).toBe(2)
})

// set
test('set', () => {
    map.set(['c', 'b'], 'cb')
    map.set(['c', 'a'], 'ca')
    map.set(['a', 'a'], 'aa')
    expect(map.size).toBe(4)

    // not increase
    map.set([], 7) // there should be two keys
    map.set(['1'], 8) // there should be two keys
    map.set([undefined, null], 9) // undefined and null should not be allowed
    expect(map.size).toBe(4)

    // 1-12 and 11-2 are different
    map.set(['1', '12'], '112')
    map.set(['11', '2'], '112')
    expect(map.size).toBe(6)

    // blank string is also allowed
    map.set(['', ''], '')
    map.set(['undefined', 'undefined'], 'undefinedundefined') // string undefined is allowed
    expect(map.size).toBe(8)
})

// get
test('get', () => {
    // normal cases
    expect(map.get(['a', 'a'])).toBe('aa')
    expect(map.get(['a', 'b'])).toBe('ba')
    expect(map.get(['b', 'a'])).toBe('ba')
    expect(map.get(['', ''])).toBe('')
    expect(map.get(['d', 'a'])).toBe(undefined)

    // error cases
    expect(map.get([])).toBe(undefined)
    expect(map.get([undefined, undefined])).toBe(undefined)
})

// has
test('has', () => {
    // normal cases
    expect(map.has(['a', 'a'])).toBe(true)
    expect(map.has(['a', 'b'])).toBe(true)
    expect(map.has(['b', 'a'])).toBe(true)
    expect(map.has(['', ''])).toBe(true)
    expect(map.has(['d', 'a'])).toBe(false)

    // error cases
    expect(map.has([])).toBe(false)
    expect(map.has([undefined, undefined])).toBe(false)
})

// delete
test('delete', () => {
    // normal cases
    map.delete(['a', 'b'])
    expect(map.has(['a', 'b'])).toBe(false)
    expect(map.has(['b', 'a'])).toBe(false)
    expect(map.get(['a', 'b'])).toBe(undefined)
    expect(map.get(['b', 'a'])).toBe(undefined)
    expect(map.size).toBe(7)

    // boundary cases
    map.delete(['a', 'b']) // duplicate deletion
    expect(map.size).toBe(7)
    map.delete([undefined, undefined])
    map.delete([])
    expect(map.has(['undefined', 'undefined'])).toBe(true)
    expect(map.size).toBe(7)
})

// keys
test('keys', () => {
    let keys = map.keys()
    const keysReverse = keys.map((key) => Array.from(key).reverse())
    keys = keys.concat(keysReverse)
    expect(keys).not.toContainEqual(['a', 'b'])
    expect(keys).toContainEqual(['a', 'a'])
    expect(keys).toContainEqual(['a', 'c'])
    expect(keys).toContainEqual(['c', 'a'])
    expect(keys).toContainEqual(['', ''])
    expect(keys).toContainEqual(['undefined', 'undefined'])
    expect(keys.length).toBe(map.size * 2)
})

// values
test('values', () => {
    const values = map.values()

    expect(values.length).toBe(map.size)
    expect(values).toContain('ca')
    expect(values).not.toContain('ac')
    expect(values).not.toContain('ba')
    expect(values).not.toContain('ab')
    expect(values).toContain('')
    expect(values).toContain('undefinedundefined')
})

// entries
test('entries', () => {
    let entries = map.entries()
    const entriesReverse = entries.map((entry) => [Array.from(entry[0]).reverse(), entry[1]])
    entries = entries.concat(entriesReverse)

    expect(entries.length).toBe(map.size * 2)
    expect(entries).toContainEqual([['c', 'a'], 'ca'])
    expect(entries).toContainEqual([['a', 'c'], 'ca'])
    expect(entries).not.toContainEqual([['a', 'c'], 'ac'])
    expect(entries).not.toContainEqual([['c', 'a'], 'ac'])

    expect(entries).not.toContainEqual([['a', 'b'], 'ba'])
    expect(entries).not.toContainEqual([['a', 'b'], 'ab'])
    expect(entries).not.toContainEqual([['b', 'a'], 'ba'])
    expect(entries).not.toContainEqual([['b', 'a'], 'ab'])

    expect(entries).toContainEqual([['', ''], ''])
    expect(entries).toContainEqual([['undefined', 'undefined'], 'undefinedundefined'])
})

// forEach
test('forEach', () => {
    const mockCallback = jest.fn((value, keys, map2) => {
        return value === keys.join('') || value === keys.reverse().join('')
    })
    map.forEach(mockCallback)
    expect(mockCallback.mock.calls.length).toBe(map.size)

    for (let i = 0; i < map.size; i++) {
        // third parameter should be same to map
        expect(mockCallback.mock.calls[i][2]).toBe(map)
        expect(mockCallback.mock.results[i].value).toBeTruthy()
    }
})
