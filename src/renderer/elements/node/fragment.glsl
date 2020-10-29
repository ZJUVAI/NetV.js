#version 300 es
precision highp float;
in vec2 position;
in float r;
in vec4 fill;
in float strokeWidth;
in vec4 strokeColor;

out vec4 fragmentColor;

uniform vec2 viewport;
uniform float pixelRatio;

float inCircle() {
  vec2 flip_pos = position;
  flip_pos.y = viewport.y - position.y;
  float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
  float draw = 1. - step(r - strokeWidth / 2., dist);
  return draw;
}

float inBorder() {
  if (strokeWidth == 0.) {
    return 0.;
  }
  vec2 flip_pos = position;
  flip_pos.y = viewport.y - position.y;
  float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
  float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);
  float drawInner = 1. - step(r - strokeWidth / 2., r);
  return drawOuter * (1. - drawInner);
  // return drawOuter;
}

void main(void) {
    // border check, using 0.5(center of smoothstep)
    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {
        discard;
    }
    fragmentColor = inBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);
}