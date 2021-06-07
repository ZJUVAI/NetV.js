import { Shader } from '../utils'

const vertex = new Shader()
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_source: 'vec2',
    in_target: 'vec2',
    in_curveness: 'float',
    in_dashInterval: 'float',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
}
vertex.outputs = {
    shape: 'float',
    strokeColor: 'vec4',
    strokeWidth: 'float',
    cpA: 'vec2',
    cpB: 'vec2',
    cpC: 'vec2',
    curveness: 'float',
    dashInterval: 'float'
}
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2'
}
vertex.main = [
    `void main(void) {`,
    `    strokeColor = in_strokeColor;`,
    `    strokeWidth = in_strokeWidth;`,
    `    shape = in_shape;`,
    `    dashInterval = in_dashInterval;`,
    `    vec2 source = in_source * scale + translate;`,
    `    vec2 target = in_target * scale + translate;`,
    `    vec2 delta = target - source;`,
    `    vec2 center = 0.5 * (source + target);`,
    `    float len = length(delta);`,
    `    float phi = atan(delta.y / delta.x);`,

    `    float containerWidth = in_strokeWidth;`,
    `    if (in_shape == 1.) {`, // circle shape need larger container
    `       containerWidth = 2. * (in_curveness * len + in_strokeWidth); // TODO: can optimize to half`,
    `    }`,
    `    vec2 normal = normalize(vec2(delta.y, -delta.x)); // TODO: link's normal, need control side`,
    `    cpA = source;`,
    `    cpB = center + normal * len * in_curveness;`,
    `    cpC = target;`,

    ``,
    `    mat3 line_scale = mat3(`,
    `        len, 0, 0,`,
    `        0, containerWidth, 0,`,
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
fragment.uniforms = {
    viewport: 'vec2',
    pixelRatio: 'float'
}

fragment.methods = [
    [
        `// reference paper: http://hhoppe.com/ravg.pdf`,
        `// distance vector to origin(0, 0)`,
        `float det(vec2 a, vec2 b) { return a.x * b.y - b.x * a.y; }`,
        ``,
        `vec2 get_distance_vector(vec2 b0, vec2 b1, vec2 b2) {`,
        `  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);`,
        `  float f = b * d - a * a;`,
        `  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;`,
        `  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);`,
        `  gf = vec2(gf.y, -gf.x);`,
        `  vec2 pp = -f * gf / dot(gf, gf);`,
        `  vec2 d0p = b0 - pp;`,
        `  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);`,
        `  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);`,
        `  return mix(mix(b0, b1, t), mix(b1, b2, t), t);`,
        `}`
    ],
    [
        `float distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {`,
        `  return length(get_distance_vector(b0 - p, b1 - p, b2 - p));`,
        `}`
    ],
    [
        `float isInDash(vec2 p, vec2 p0, vec2 p1, int dashInterval) {`,
        `  if (dashInterval <= 0) {`,
        `    return 0.;`,
        `  }`,
        `  if (dashInterval >= int(length(p1 - p0))) {`,
        `    return 1.;`,
        `  }`,
        `  float d = dot((p - p0), (p1 - p0)) / length(p1 - p0);`, // projected p to p0-p1 line and calculate distance to p0
        `  int idx = int(d) / dashInterval;`,
        `  return 1. - float(idx % 2);`,
        `}`
    ]
]

fragment.main = [
    `void main(void) {`,
    `  if (shape == 0.) {`,
    `    // line`,
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `  } else if (shape == 1.) {`,
    `    // curve`,
    `    vec2 pos = gl_FragCoord.xy / pixelRatio;`,
    `    vec2 cpAFlipped = vec2(cpA.x, viewport.y - cpA.y);`,
    `    vec2 cpBFlipped = vec2(cpB.x, viewport.y - cpB.y);`,
    `    vec2 cpCFlipped = vec2(cpC.x, viewport.y - cpC.y);`,
    `    float dist = distToQuadraticBezierCurve(pos, cpAFlipped, cpBFlipped, cpCFlipped);`,
    `    float epsilon = fwidth(dist);`,
    `    if (dist < strokeWidth / 2. + epsilon) {`,
    `      float inCurve = 1. - smoothstep(strokeWidth / 2. - epsilon, strokeWidth / 2. + epsilon, dist);`,
    `      fragmentColor = inCurve * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `    } else {`,
    `      discard;`,
    `    }`,
    `  } else if (shape == 2.) {`,
    `    // dash-line`,
    `    vec2 pos = gl_FragCoord.xy / pixelRatio;`,
    `    vec2 cpAFlipped = vec2(cpA.x, viewport.y - cpA.y);`,
    `    vec2 cpCFlipped = vec2(cpC.x, viewport.y - cpC.y);`,
    `    if(isInDash(pos, cpAFlipped, cpCFlipped, int(dashInterval)) > 0.5) {`,
    `      fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `    } else {`,
    `      discard;`,
    `    }`,
    `  }`,
    `}`
]

const idFragment = fragment.copy()
idFragment.inputs['id'] = 'vec4'

const sentencesTobeReplaced = [
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `      fragmentColor = inCurve * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `      fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`
]
sentencesTobeReplaced.forEach((sentence) => {
    idFragment.main[idFragment.main.indexOf(sentence)] = `fragmentColor = id;`
})

export { vertex, idVertex, fragment, idFragment }
