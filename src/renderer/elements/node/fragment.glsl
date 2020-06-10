#version 300 es
precision highp float;
in vec2 pos;
in float size;
in vec4 color;

out vec4 fragmentColor;

uniform vec2 viewport;

float inCircle() {
  vec2 flip_pos = pos;
  flip_pos.y = viewport.y - pos.y;
  float r = distance(gl_FragCoord.xy, flip_pos);
  float draw = 1. - smoothstep(size * 0.95, size * 1.05, r);
  return draw;
}

void main(void) {
    // border check, using 0.5(center of smoothstep)
    if (inCircle() < 0.5) {
        discard;
    }
    fragmentColor = inCircle() * vec4(color.rgb * color.a, color.a);
}