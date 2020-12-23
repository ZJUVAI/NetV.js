import { Shader } from '../utils'

const vertex = new Shader()
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_position: 'vec2',
    in_offset: 'vec2',
    in_width: 'float',
    in_height: 'float',
    in_innerSize: 'vec2',
    in_rotate: 'float',
    in_r: 'float',
    in_vertexAlpha: 'vec2',
    in_vertexBeta: 'vec2',
    in_vertexGamma: 'vec2',
    in_fill: 'vec4',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
}
vertex.outputs = {
    position: 'vec2',
    shape: 'float',
    width: 'float', // rect
    height: 'float', // rect
    innerSize: 'vec2',
    rotate: 'float', // rect
    r: 'float', // circle
    vertexAlpha: 'vec2', // triangle
    vertexBeta: 'vec2', // triangle
    vertexGamma: 'vec2', // triangle
    fill: 'vec4',
    strokeWidth: 'float',
    strokeColor: 'vec4'
}
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2',
    viewport: 'vec2',
    pixelRatio: 'float'
}
vertex.methods = [
    [
        `vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {`,
        `   float inner_p1 = sqrt(dot(p1, p1));`,
        `   float inner_p2 = sqrt(dot(p2, p2));`,
        `   float inner_p3 = sqrt(dot(p3, p3));`,
        `   vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);`,
        `   return inner;`,
        `}`
    ],
    [
        `float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {`,
        `   vec2 inner = calculate_inner_point(p1, p2, p3);`,
        `   float a = distance(p1, inner);`,
        `   float b = distance(p2, inner);`,
        `   float c = distance(p1, p2);`,
        `   float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);`,
        `   float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));`,
        `   float normal_length = sin_alpha * a;`,
        `   float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;`,
        `   return stroke_scale;`,
        `}`
    ]
]
vertex.main = [
    `void main(void) {`,
    `   r = in_r;`,
    `   width = in_width;`,
    `   height = in_height;`,
    `   innerSize = in_innerSize;`,
    `   shape = in_shape;`,
    `   fill = in_fill;`,
    `   strokeColor = in_strokeColor;`,
    `   strokeWidth = in_strokeWidth;`,
    `   rotate = in_rotate;`,
    `   position = scale * (in_position + in_offset) + translate;`,
    `   vertexAlpha = in_vertexAlpha * pixelRatio;`,
    `   vertexBeta = in_vertexBeta * pixelRatio;`,
    `   vertexGamma = in_vertexGamma * pixelRatio;`,
    `   mat3 scale_mat = mat3(`,
    `       1, 0, 0,`,
    `       0, 1, 0,`,
    `       0, 0, 1`,
    `   );`,
    `   mat3 rotate_mat = mat3(`,
    `       1, 0, 0,`,
    `       0, 1, 0,`,
    `       0, 0, 1`,
    `   );`,
    `   mat3 translate_mat = mat3(`,
    `       1, 0, 0,`,
    `       0, 1, 0,`,
    `       position.x, position.y, 1`,
    `   );`,
    `   if (shape == 0.0) {`, // circle shape
    `       float size = (r + strokeWidth / 2.) * 2. * 1.5;`, // NOTE: multiply 2. to make radius to diameter; multiply 1.5 to prevent border factor
    `       scale_mat = mat3(`,
    `           size, 0, 0,`,
    `           0, size, 0,`,
    `           0, 0, 1`,
    `           );`,
    `   } else if (shape == 1.0 || shape == 3.0) {`, // rect shape
    `       scale_mat = mat3(`,
    `           width + strokeWidth, 0, 0,`,
    `           0, height + strokeWidth, 0,`,
    `           0, 0, 1`,
    `       );`,
    `       rotate_mat = mat3(`,
    `           cos(rotate), sin(rotate), 0,`,
    `           -sin(rotate), cos(rotate), 0,`,
    `           0, 0, 1`,
    `       );`,
    `   } else if (shape == 2.0) {`, // triangle shape
    // calculate the normal of the edge: alpha => beta
    `       vec2 inner = calculate_inner_point(vertexAlpha, vertexBeta, vertexGamma);`,
    `       float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
    `       vec2 outer_vertexAlpha = (vertexAlpha - inner) * stroke_scale + inner;`, // consider stroke in
    `       vec2 outer_vertexBeta = (vertexBeta - inner) * stroke_scale + inner;`, // consider stroke in
    `       vec2 outer_vertexGamma = (vertexGamma - inner) * stroke_scale + inner;`, // consider stroke in
    // to ensure the fragment cutting is within the rectangle
    `       width = 1.5 * (max(max(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x) - min(min(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x));`,
    `       height = 1.5 * (max(max(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y)- min(min(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y));`,
    `       scale_mat = mat3(`,
    `           width, 0, 0,`,
    `           0, height, 0,`,
    `           0, 0, 1`,
    `       );`,
    `   }`,
    `   mat3 transform = translate_mat * rotate_mat * scale_mat;`,
    `   gl_Position = vec4(projection * transform * inVertexPos, 1.);`,
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
        `vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {`,
        `    float inner_p1 = sqrt(dot(p1, p1));`,
        `    float inner_p2 = sqrt(dot(p2, p2));`,
        `    float inner_p3 = sqrt(dot(p3, p3));`,
        `    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);`,
        `    return inner;`,
        `}`
    ],
    [
        `float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {`,
        `    vec2 inner = calculate_inner_point(p1, p2, p3);`,
        `    float a = distance(p1, inner);`,
        `    float b = distance(p2, inner);`,
        `    float c = distance(p1, p2);`,
        `    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);`,
        `    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));`,
        `    float normal_length = sin_alpha * a;`,
        `    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;`,
        `    return stroke_scale;`,
        `}`
    ],
    [
        `float sign (vec2 p1, vec2 p2, vec2 p3) {`,
        `    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);`,
        `}`
    ],
    [
        `float inTriangle() {`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 flip_vertexAlpha = vec2(vertexAlpha.x, - vertexAlpha.y) / stroke_scale;`,
        `    vec2 flip_vertexBeta = vec2(vertexBeta.x, - vertexBeta.y) / stroke_scale;`,
        `    vec2 flip_vertexGamma = vec2(vertexGamma.x, - vertexGamma.y) / stroke_scale;`,
        `    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexGamma, flip_vertexAlpha);`,
        `    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);`,
        `    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);`,
        `    if (!(has_neg && has_pos)) {`,
        `        return 1.0;`,
        `    } else {`,
        `        return 0.0;`,
        `    }`,
        `}`
    ],
    [
        `float inTriangleBorder() {`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 flip_vertexAlpha = stroke_scale * vec2(vertexAlpha.x, - vertexAlpha.y);`,
        `    vec2 flip_vertexBeta = stroke_scale * vec2(vertexBeta.x, - vertexBeta.y);`,
        `    vec2 flip_vertexGamma = stroke_scale * vec2(vertexGamma.x, - vertexGamma.y);`,
        ``,
        `    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexGamma, flip_vertexAlpha);`,
        ``,
        `    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);`,
        `    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);`,
        ``,
        `    bool inTriangle = inTriangle() == 1.0;`,
        `    bool inTriangleBorder = !(has_neg && has_pos);`,
        ``,
        `    if (!inTriangle && inTriangleBorder) {`,
        `        return 1.0;`,
        `    } else {`,
        `        return 0.0;`,
        `    }`,
        `}`
    ],

    [
        `float inRect() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float x_in = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    return x_in * y_in;`,
        `}`
    ],

    [
        `float inRectBorder() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float x_in_outer = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));`,
        `    float y_in_outer = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));`,
        `    float x_in_inner = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in_inner = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        ``,
        `    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);`,
        `}`
    ],

    [
        `float inCross() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float innerWidth = innerSize.x;`,
        `    float innerHeight = innerSize.y;`,
        `    float x_in1 = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 + strokeWidth / 2.0));`,
        `    float x_in2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 + strokeWidth / 2.0));`,
        `    float y_in2 = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    return min(1., x_in1 * y_in1 + x_in2 * y_in2);`,
        `}`
    ],

    [
        `float inCrossBorder() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float innerWidth = innerSize.x;`,
        `    float innerHeight = innerSize.y;`,

        // TODO: need refactor
        `    float x_in1 = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 + strokeWidth / 2.0));`,
        `    float x_in2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 + strokeWidth / 2.0));`,
        `    float y_in2 = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    float outCross = 1. - min(1., x_in1 * y_in1 + x_in2 * y_in2);`,
        ``,
        `    float x_out1 = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));`,
        `    float y_out1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 - strokeWidth / 2.0));`,
        `    float x_out2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 - strokeWidth / 2.0));`,
        `    float y_out2 = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));`,
        `    float inCrossBorder = min(1., x_out1 * y_out1 + x_out2 * y_out2);`,
        `    return inCrossBorder * outCross;`,
        `}`
    ],

    [
        `float inCircle() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);`,
        `    return 1. - smoothstep((r - strokeWidth / 2.) - 2. * fwidth(dist), (r - strokeWidth / 2.), dist);`,
        `}`
    ],

    [
        `float inCircleBorder() {`,
        `    if (strokeWidth == 0.) {`,
        `      return 0.;`,
        `    }`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        ``,
        `    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);`,
        `    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) - fwidth(dist), (r + strokeWidth / 2.), dist);`,
        `    float drawInner = 1. - smoothstep((r - strokeWidth / 2.) - fwidth(dist), (r - strokeWidth / 2.), dist);`,
        `    return drawOuter * (1. - drawInner);`,
        `}`
    ]
]
fragment.main = [
    `void main(void) {`,
    `    if (shape == 0.0) {`,
    `        // circle shape`,
    `        // border check, using 0.5(center of smoothstep)`,
    `        if (inCircle() < 0.0001 && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 1.0) {`,
    `        // rect shape`,
    `        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 2.0) {`,
    `        // triangle shape`,
    `        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 3.0) {`,
    `        // cross shape`,
    `        fragmentColor = inCrossBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCross() * vec4(fill.rgb * fill.a, fill.a);`,
    `    }`,
    `}`
]

const idFragment = fragment.copy()
idFragment.inputs['id'] = 'vec4'
// delete old fragmentColor
idFragment.main.splice(7, 1)
idFragment.main.splice(9, 1)
idFragment.main.splice(11, 1)
idFragment.main.splice(13, 1)
// add new fragmentColor
idFragment.main.splice(-1, 0, `fragmentColor = id;`)

export { vertex, idVertex, fragment, idFragment }
