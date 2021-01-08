#version 300 es
precision highp float;
in vec2 position;
in vec4 shape_strokeWidth_rotate_r;
in vec2 size; // rect: width + height
in vec2 vertex_alpha; // triangle
in vec2 vertex_beta; // triangle
in vec2 vertex_gamma; // triangle
in vec4 fill;
in vec4 strokeColor;

out vec4 fragmentColor;

uniform vec2 viewport;
uniform float pixelRatio;


vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {
    float inner_p1 = sqrt(dot(p1, p1));
    float inner_p2 = sqrt(dot(p2, p2));
    float inner_p3 = sqrt(dot(p3, p3));
    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);
    return inner;
}

float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    vec2 inner = calculate_inner_point(p1, p2, p3);
    float a = distance(p1, inner);
    float b = distance(p2, inner);
    float c = distance(p1, p2);
    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);
    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));
    float normal_length = sin_alpha * a;
    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;
    return stroke_scale;
}

float sign (vec2 p1, vec2 p2, vec2 p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

float inTriangle() {
    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);
    vec2 flip_pos = vec2(position.x, viewport.y - position.y);
    vec2 flip_vertex_alpha = vec2(vertex_alpha.x, - vertex_alpha.y) / stroke_scale;
    vec2 flip_vertex_beta = vec2(vertex_beta.x, - vertex_beta.y) / stroke_scale;
    vec2 flip_vertex_gamma = vec2(vertex_gamma.x, - vertex_gamma.y) / stroke_scale;

    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);
    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);
    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);

    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);
    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);

    if (!(has_neg && has_pos)) {
        return 1.0;
    } else {
        return 0.0;
    }
}

float inTriangleBorder() {
    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);
    vec2 flip_pos = vec2(position.x, viewport.y - position.y);
    vec2 flip_vertex_alpha = stroke_scale * vec2(vertex_alpha.x, - vertex_alpha.y);
    vec2 flip_vertex_beta = stroke_scale * vec2(vertex_beta.x, - vertex_beta.y);
    vec2 flip_vertex_gamma = stroke_scale * vec2(vertex_gamma.x, - vertex_gamma.y);

    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);
    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);
    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);

    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);
    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);

    bool inTriangle = inTriangle() == 1.0;
    bool inTriangleBorder = !(has_neg && has_pos);

    if (!inTriangle && inTriangleBorder) {
        return 1.0;
    } else {
        return 0.0;
    }
}

float inRect() {
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    float rotate = shape_strokeWidth_rotate_r.b;
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    mat2 rotate_mat = mat2(
        cos(rotate), sin(rotate),
        -sin(rotate), cos(rotate)
    );
    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);
    float x_in = step(rotate_related_FragCoord.x, size.x / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - size.x / 2.0 + strokeWidth / 2.0));
    float y_in = step(rotate_related_FragCoord.y, size.y / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - size.y / 2.0 + strokeWidth / 2.0));
    return x_in * y_in;
}

float inRectBorder() {
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    float rotate = shape_strokeWidth_rotate_r.b;
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    mat2 rotate_mat = mat2(
        cos(rotate), sin(rotate),
        -sin(rotate), cos(rotate)
    );
    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);
    float x_in_outer = step(rotate_related_FragCoord.x, size.x / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - size.x / 2.0 - strokeWidth / 2.0));
    float y_in_outer = step(rotate_related_FragCoord.y, size.y / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - size.y / 2.0 - strokeWidth / 2.0));
    float x_in_inner = step(rotate_related_FragCoord.x, size.x / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - size.x / 2.0 + strokeWidth / 2.0));
    float y_in_inner = step(rotate_related_FragCoord.y, size.y / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - size.y / 2.0 + strokeWidth / 2.0));

    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);
}

float inCircle() {
    float r = shape_strokeWidth_rotate_r.a;
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
    float dist_in_r = step(dist, r - strokeWidth / 2.);
    return dist_in_r;
}

float inCircleBorder() {
    float r = shape_strokeWidth_rotate_r.a;
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    if (strokeWidth == 0.) {
      return 0.;
    }
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;

    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);
    float drawInner = 1. - step(r - strokeWidth / 2., dist);
    return drawOuter * (1. - drawInner);
}

void main(void) {
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    float shape = shape_strokeWidth_rotate_r.r;
    if (shape == 0.0) {
        // circle shape
        // border check, using 0.5(center of smoothstep)
        if (inCircle() < 1. && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {
            discard;
        }
        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);
    } else if (shape == 1.0) {
        // rect shape
        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);
        // fragmentColor = vec4(fill.rgb * fill.a, fill.a);
    } else if (shape == 2.0) {
        // triangle shape
        // fragmentColor = vec4(fill.rgb * fill.a, fill.a);
        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);
    }
}