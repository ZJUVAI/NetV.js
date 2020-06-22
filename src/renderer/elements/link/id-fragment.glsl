#version 300 es
precision highp float;
in vec4 color;

in vec4 id;

// TODO: all id related shader need clean up
out vec4 fragmentColor;

void main(void) {
    fragmentColor = id;
}