#version 300 es
precision highp float;
in vec2 pos;
in float size;
in vec4 color;

out vec4 fragmentColor;

uniform vec2 viewport;

float inCircle() {
  vec2 flip_pos = pos;
  float strokeWidth = 2.;
  flip_pos.y = viewport.y - pos.y;
  float r = distance(gl_FragCoord.xy, flip_pos);
  float draw = 1. - step(size - strokeWidth / 2., r);
  return draw;
}

float inBorder() {
  vec2 flip_pos = pos;
  flip_pos.y = viewport.y - pos.y;
  float r = distance(gl_FragCoord.xy, flip_pos);
  float strokeWidth = 2.;
  float drawOuter = 1. - smoothstep((size + strokeWidth / 2.) * 0.95, (size + strokeWidth / 2.) * 1.05, r);
  float drawInner = 1. - step(size - strokeWidth / 2., r);
  return drawOuter * (1. - drawInner);
  // return drawOuter;
}

void main(void) {
    // border check, using 0.5(center of smoothstep)
    if (inCircle() < 0.5 && inBorder() < 0.5) {
        discard;
    }
    vec4 strokeColor = vec4(1., 0., 0., 0.5);
    fragmentColor = inBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(color.rgb * color.a, color.a);
}