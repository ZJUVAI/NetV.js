#version 300 es
precision highp float;
in vec3 inVertexPos;
in vec2 in_position;
in float in_r;
in vec4 in_fill;
in float in_strokeWidth;
in vec4 in_strokeColor;

in vec4 in_id;

out vec2 position;
out float r;
out vec4 fill;
out float strokeWidth;
out vec4 strokeColor;

out vec4 id;

uniform mat3 projection;
uniform vec2 scale;
uniform vec2 translate;
uniform vec2 viewport;

void main(void) {
    id = in_id;
    
    r = in_r;
    fill = in_fill;
    strokeColor = in_strokeColor;
    strokeWidth = in_strokeWidth;
    float size = (in_r + in_strokeWidth / 2.) * 2. * 1.5;  // NOTE: multiply 2. to make radius to diameter; multiply 1.5 to prevent border factor
    position = scale * in_position + translate;
    mat3 transform = mat3(
        size, 0, 0,
        0, size, 0,
        position.x, position.y, 1
    );

    gl_Position = vec4(projection * transform * inVertexPos, 1.);
}