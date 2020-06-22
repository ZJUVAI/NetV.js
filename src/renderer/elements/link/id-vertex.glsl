#version 300 es
precision highp float;
in vec3 inVertexPos;
in vec2 inSourcePosition;
in vec2 inTargetPosition;
in float inStrokeWidth;
in vec4 inStrokeColor;

in vec4 inId;

out vec4 color;

out vec4 id;

uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;

void main(void) {
    id = inId;

    color = inStrokeColor;

    vec2 source = inSourcePosition * scale + translate;
    vec2 target = inTargetPosition * scale + translate;
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