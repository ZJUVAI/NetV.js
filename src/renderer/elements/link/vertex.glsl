#version 300 es
precision highp float;
in vec3 inVertexPos;
in vec2 inSource;
in vec2 inTarget;
in float inStrokeWidth;
in vec4 inStrokeColor;

out vec4 color;

// TODO: need review
uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;

void main(void) {
    color = inStrokeColor;

    vec2 source = inSource * scale + translate;
    vec2 target = inTarget * scale + translate;
    vec2 delta = source - target;
    vec2 center = 0.5 * (source + target);
    float len = length(delta);
    float phi = atan(delta.y / delta.x);

    mat3 line_scale = mat3(
        len, 0, 0,
        0, inStrokeWidth, 0,
        0, 0, 1
    );
    mat3 line_rotate = mat3(
        cos(phi), sin(phi), 0,
        -sin(phi), cos(phi), 0,
        0, 0, 1
    );
    mat3 line_translate = mat3(
        1, 0, 0,
        0, 1, 0,
        center.x, center.y, 1
    );
    
    mat3 transform = line_translate * line_rotate * line_scale;

    gl_Position = vec4(projection * transform * inVertexPos, 1.);
}