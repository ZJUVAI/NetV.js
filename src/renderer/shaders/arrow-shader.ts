import { Shader } from '../utils'

const vertex = new Shader()
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_source: 'vec2',
    in_target: 'vec2',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
}
vertex.outputs = {
    shape: 'float',
    strokeColor: 'vec4'
}
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2'
}

vertex.main = [
    `void main(void) {`,
    `    strokeColor = in_strokeColor;`,
    `    shape = in_shape;`,
    `    vec2 source = in_source * scale + translate;`,
    `    vec2 target = in_target * scale + translate;`,
    `    vec2 delta = target - source;`,
    // `    vec2 center = 0.5 * (source + target);`,
    `    vec2 center = target - 20. * normalize(delta);`, // TODO: pass offset parameter
    `    float len = length(delta);`,
    `    float phi = atan(delta.y / delta.x);`,
    ``,
    `    mat3 line_scale = mat3(`,
    `        3. * in_strokeWidth, 0, 0,`, // TODO: pass size parameter
    `        0, 3. * in_strokeWidth, 0,`,
    `        0, 0, 1`,
    `    );`,
    `    mat3 line_rotate = mat3(`,
    `        cos(phi), sin(phi), 0,`,
    `        -sin(phi), cos(phi), 0,`,
    `        0, 0, 1`,
    `    );`,
    `    mat3 line_translate = mat3(`,
    `        1, 0, 0,`,
    `        0, 1, 0,`,
    `        center.x, center.y, 1`,
    `    );`,
    `    `,
    `    mat3 transform = line_translate * line_rotate * line_scale;`,
    ``,
    `    gl_Position = vec4(projection * transform * inVertexPos, 1.);`,
    `}`
]

const idVertex = vertex.copy()
idVertex.inputs['in_id'] = 'vec4'
idVertex.outputs['id'] = 'vec4'
idVertex.main.splice(1, 0, `id = in_id;`)

const fragment = new Shader()
fragment.inputs = { ...vertex.outputs }
fragment.outputs = {
    fragmentColor: 'vec4'
}

fragment.methods = [
    [
        `float inArrow() {`,
        `   return 0.;`,
        `}`,
    ]
]

fragment.main = [
    `void main(void) {`,
    `    fragmentColor = vec4(1., 0., 0., 1.);`,
    `    //fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `}`
]

const idFragment = fragment.copy()
idFragment.inputs['id'] = 'vec4'
idFragment.main[1] = `fragmentColor = id;`

export { vertex, idVertex, fragment, idFragment }
