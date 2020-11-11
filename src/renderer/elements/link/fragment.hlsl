#version 300 es
precision highp float;
in vec4 strokeColor;

out vec4 fragmentColor;

void main(void) {
    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);
}