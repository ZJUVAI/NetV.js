#version 300 es
precision highp float;
in vec2 pos;
in float size;
in vec4 color;

out vec4 fragmentColor;

void main(void) {
    fragmentColor = color;
}