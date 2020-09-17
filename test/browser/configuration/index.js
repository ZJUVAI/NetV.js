/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Basic test for configurations
 *
 *
 */

const body = document.body
let netv
let div
let p

/**
 * 1.1.1
 * @expected: success
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div
    })
} catch (e) {
    console.log('1.1.1')
    console.error(e)
} finally {
    body.removeChild(div)
}

/**
 * 1.1.2
 * @expected: failed, console error
 */
try {
    p = document.createElement('p')
    body.appendChild(p)
    netv = new NetV({
        container: p
    })
} catch (e) {
    console.log('1.1.2')
    console.error(e)
} finally {
    body.removeChild(p)
}

/**
 * 1.1.3
 * @expected: success, console warning
 */
try {
    netv = new NetV({
        container: document.createElement('div')
    })
} catch (e) {
    console.log('1.1.3')
    console.error(e)
}

/**
 * 1.1.4
 * @expected: failed, console error
 */
try {
    netv = new NetV({})
} catch (e) {
    console.log('1.1.4-a')
    console.error(e)
}

try {
    netv = new NetV({
        container: undefined
    })
} catch (e) {
    console.log('1.1.4-b')
    console.error(e)
}

try {
    netv = new NetV({
        container: null
    })
} catch (e) {
    console.log('1.1.4-c')
    console.error(e)
}

/**
 * 1.1.5
 * @expected: failed, console error
 */
try {
    netv = new NetV({
        container: NaN
    })
} catch (e) {
    console.log('1.1.5')
    console.error(e)
}

/**
 * 1.2.1
 * @expected: success
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 100,
        height: 100
    })
} catch (e) {
    console.log('1.2.1')
    console.error(e)
} finally {
    body.removeChild(div)
}

/**
 * 1.2.2
 * @expected: failed
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 100,
        height: -100
    })
} catch (e) {
    console.log('1.2.2-a')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: -100,
        height: 100
    })
} catch (e) {
    console.log('1.2.2-b')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: -100,
        height: -100
    })
} catch (e) {
    console.log('1.2.2-c')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 100,
        height: 0
    })
} catch (e) {
    console.log('1.2.2-d')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 0,
        height: 100
    })
} catch (e) {
    console.log('1.2.2-e')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 0,
        height: 0
    })
} catch (e) {
    console.log('1.2.2-f')
    console.error(e)
} finally {
    body.removeChild(div)
}

/**
 * 1.2.3
 * @expected: success with default value
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 100
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-a')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        height: 100
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-b')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-c')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: 100,
        height: undefined
    })
} catch (e) {
    console.log('1.2.3-d')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: null,
        height: 100
    })
} catch (e) {
    console.log('1.2.3-e')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: undefined,
        height: null
    })
} catch (e) {
    console.log('1.2.3-f')
    console.error(e)
} finally {
    body.removeChild(div)
}

/**
 * 1.2.4
 * @expected: failed, log error
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: NaN
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-a')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        height: NaN
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-b')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: NaN,
        height: NaN
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-c')
    console.error(e)
} finally {
    body.removeChild(div)
}

/**
 * 1.3.1
 * @expected: success
 */
try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        background
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-a')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        height: NaN
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-b')
    console.error(e)
} finally {
    body.removeChild(div)
}

try {
    div = document.createElement('div')
    body.appendChild(div)
    netv = new NetV({
        container: div,
        width: NaN,
        height: NaN
    })
    console.log(div.clientWidth, div.clientHeight)
} catch (e) {
    console.log('1.2.3-c')
    console.error(e)
} finally {
    body.removeChild(div)
}
