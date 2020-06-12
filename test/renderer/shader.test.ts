/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test shader related utilities
 */

// TODO: unused test due to lack webgl2 support

import { JSDOM } from 'jsdom'
// import { compileShader } from '../../src/renderer/elements/utils'
// import { vertShaderStr } from '../../src/renderer/elements/node/shader'
import * as getContext from 'get-canvas-context'

const testVertShaderStr = `
#version 300 es
precision highp float;
in vec3 inVertexPos;
in vec2 inPosition;
in float inRadius;
in vec4 inFill;

out vec2 pos;
out float size;
out vec4 color;

// TODO: need review
uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;
uniform vec2 viewport;

void main(void) {
    size = inRadius;
    color = inFill;
    float vertexSize = dotSize * (2. * sqrt(2.));
    pos = scale * inPosition + translate;
    mat3 transform = mat3(
        vertexSize, 0, 0,
        0, vertexSize, 0,
        pos.x, pos.y, 1
    );

    gl_Position = vec4(projection * translate * inVertexPos, 1.);
}
`

test('load shader', () => {
    const dom = new JSDOM()
    const document = dom.window.document
    const canvas = document.createElement('canvas')

    const gl = getContext('webgl2', { canvas })
    // compileShader(gl, testVertShaderStr, gl.VERTEX_SHADER)
})
