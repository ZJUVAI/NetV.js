#version 300 es
precision highp float;
in vec3 inVertexPos;
in float in_shape;
in vec2 in_position;
in vec2 in_offset;
in float in_width; // rect
in float in_height; // rect
in float in_rotate; // rect
in float in_r; // circle
in vec4 in_fill;
in float in_strokeWidth;
in vec4 in_strokeColor;

out vec2 position;
out float shape;
out float width; // rect
out float height; // rect
out float r; // circle
out vec4 fill;
out float strokeWidth;
out vec4 strokeColor;

uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;
uniform vec2 viewport;

void main(void) {
    r = in_r;
    float rotate = in_rotate;
    width = in_width;
    height = in_height;
    shape = in_shape;
    fill = in_fill;
    strokeColor = in_strokeColor;
    strokeWidth = in_strokeWidth;
    
    position = scale * (in_position + in_offset) + translate;

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
            width + strokeWidth, 0, 0,
            0, height + strokeWidth, 0,
            0, 0, 1
        );
        rotate_mat = mat3(
            cos(rotate), sin(rotate), 0,
            -sin(rotate), cos(rotate), 0,
            0, 0, 1
        );
    }

    mat3 transform = translate_mat * rotate_mat * scale_mat;

    gl_Position = vec4(projection * transform * inVertexPos, 1.);
}