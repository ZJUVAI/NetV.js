import { Shader } from '../utils'

const vertex = new Shader()
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_source: 'vec2',
    in_target: 'vec2',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4',
    in_color: 'vec4',
    in_size: 'float',
    in_offset: 'float',
    in_type: 'float',
}
vertex.outputs = {
    shape: 'float',
    type: 'float',
    strokeColor: 'vec4' // TODO: need change name
}
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2'
}

vertex.main = [
    `void main(void) {`,
    `    strokeColor = in_color;`,
    `    shape = in_shape;`,
    `    type = in_type;`,
    `    vec2 source = in_source * scale + translate;`,
    `    vec2 target = in_target * scale + translate;`,
    `    vec2 delta;`,
    `    vec2 center;`,
    `    if (in_type == 1.) {`,
    `       delta = target - source;`,
    `       center = target - in_offset * normalize(delta);`,
    `    } else if (in_type == 2.) {`,
    `       delta = source - target;`,
    `       center = source - in_offset * normalize(delta);`,
    `    }`,
    `    float len = length(delta);`,
    `    float phi = atan(delta.y / delta.x);`, // TODO: x is zero?
    `    if (delta.x < 0.) {`,
    `       phi += 3.14159265359;`, // TODO: define PI
    `    }`,
    ``,
    `    mat3 line_scale = mat3(`,
    `        in_size * in_strokeWidth, 0, 0,`,
    `        0, in_size * in_strokeWidth, 0,`,
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

fragment.main = [
    `void main(void) {`,
    `    if (type == 0.) discard;`,
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `}`
]

const idFragment = fragment.copy()
idFragment.inputs['id'] = 'vec4'
idFragment.main[1] = `fragmentColor = id;`

export { vertex, idVertex, fragment, idFragment }
