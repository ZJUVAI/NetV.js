#version 300 es
precision highp float;
in vec2 pos;
in float radius;
in vec4 color;
in float strokeWidth;
in vec4 strokeColor;

in vec4 id;

out vec4 fragmentColor;

uniform vec2 viewport;
uniform float pixelRatio;

float inCircle() {
  vec2 flip_pos = pos;
  flip_pos.y = viewport.y - pos.y;
  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
  float draw = 1. - step(radius - strokeWidth / 2., r);
  return draw;
}

float inBorder() {
  if (strokeWidth == 0.) {
    return 0.;
  }
  vec2 flip_pos = pos;
  flip_pos.y = viewport.y - pos.y;
  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);
  float drawInner = 1. - step(radius - strokeWidth / 2., r);
  return drawOuter * (1. - drawInner);
  // return drawOuter;
}

void main(void) {
    // border check, using 0.5(center of smoothstep)
    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {
        discard;
    }
    fragmentColor = id;
}