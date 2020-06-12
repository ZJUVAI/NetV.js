/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test for node in rederer
 */

// TODO: unused test due to lack webgl2 support

import { RenderNodeManager } from '../../src/renderer/elements/node'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document
const canvas = document.createElement('canvas')
const gl = canvas.getContext('webgl2')

test('create node', () => {
    // const node = new RenderNodeManager(gl, 100)
})
