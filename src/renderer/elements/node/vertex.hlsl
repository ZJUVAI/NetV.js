#version 300 es
precision highp float;
in vec3 inVertexPos;
in vec4 in_shape_strokeWidth_rotate_r; // merge shape strokeWidth rotate and r into one attribute
in vec2 in_position;
in vec2 in_size; // rect: width + height
in vec2 in_vertex_alpha; // triangle
in vec2 in_vertex_beta; // triangle
in vec2 in_vertex_gamma; // triangle
in vec4 in_fill;
in vec4 in_strokeColor;

out vec2 position;
out vec4 shape_strokeWidth_rotate_r;
out vec2 size; // rect: width + height
out vec2 vertex_alpha; // triangle
out vec2 vertex_beta; // triangle
out vec2 vertex_gamma; // triangle
out vec4 fill;
out vec4 strokeColor;

uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;
uniform vec2 viewport;
uniform float pixelRatio;


vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {
    float inner_p1 = sqrt(dot(p1, p1));
    float inner_p2 = sqrt(dot(p2, p2));
    float inner_p3 = sqrt(dot(p3, p3));
    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);
    return inner;
}

float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3, float strokeWidth, float pixelRatio) {
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

void main(void) {
    size = in_size;
    shape_strokeWidth_rotate_r = in_shape_strokeWidth_rotate_r;
    float shape = shape_strokeWidth_rotate_r.r;
    float strokeWidth = shape_strokeWidth_rotate_r.g;
    float rotate = shape_strokeWidth_rotate_r.b;
    float r = shape_strokeWidth_rotate_r.a;
    fill = in_fill;
    strokeColor = in_strokeColor;
    
    position = scale * in_position + translate;
    vertex_alpha = in_vertex_alpha * pixelRatio;
    vertex_beta = in_vertex_beta * pixelRatio;
    vertex_gamma = in_vertex_gamma * pixelRatio;

    mat3 scale_mat = mat3(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    );
    mat3 rotate_mat = mat3(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    );
    mat3 translate_mat = mat3(
        1, 0, 0,
        0, 1, 0,
        position.x, position.y, 1
    );

    if (shape == 0.0) { // circle shape
        float size = (r + strokeWidth / 2.) * 2. * 1.5;  // NOTE: multiply 2. to make radius to diameter; multiply 1.5 to prevent border factor
        scale_mat = mat3(
            size, 0, 0,
            0, size, 0,
            0, 0, 1
        );
    } else if (shape == 1.0) { // rect shape
        scale_mat = mat3(
            size.x + strokeWidth, 0, 0,
            0, size.y + strokeWidth, 0,
            0, 0, 1
        );
        rotate_mat = mat3(
            cos(rotate), sin(rotate), 0,
            -sin(rotate), cos(rotate), 0,
            0, 0, 1
        );
    } else if (shape == 2.0) { // triangle shape
        // calculate the normal of the edge: alpha => beta
        vec2 inner = calculate_inner_point(vertex_alpha, vertex_beta, vertex_gamma);
        float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma, strokeWidth, pixelRatio);

        vec2 outer_vertex_alpha = (vertex_alpha - inner) * stroke_scale + inner ; // consider stroke in
        vec2 outer_vertex_beta = (vertex_beta - inner) * stroke_scale + inner ; // consider stroke in
        vec2 outer_vertex_gamma = (vertex_gamma - inner) * stroke_scale + inner ; // consider stroke in

        // to ensure the fragment cutting is within the rectangle
        float width = 1.5 * (max(max(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x) - min(min(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x));
        float height = 1.5 * (max(max(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y)- min(min(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y));
        size = vec2(width, height);

        scale_mat = mat3(
            width, 0, 0,
            0, height, 0,
            0, 0, 1
        );
    }

    mat3 transform = translate_mat * rotate_mat * scale_mat;

    gl_Position = vec4(projection * transform * inVertexPos, 1.);
}