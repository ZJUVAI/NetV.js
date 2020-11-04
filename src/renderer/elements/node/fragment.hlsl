#version 300 es
precision highp float;
in vec2 position;
in float shape;
in float width;
in float height;
in float r;
in vec4 fill;
in float strokeWidth;
in vec4 strokeColor;

out vec4 fragmentColor;

uniform vec2 viewport;
uniform float pixelRatio;

float inRect() {
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    float x_in = step(gl_FragCoord.x / pixelRatio, flip_pos.x + width / 2.0 - strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.x / pixelRatio, flip_pos.x - width / 2.0 + strokeWidth / 2.0));
    float y_in = step(gl_FragCoord.y / pixelRatio, flip_pos.y + height / 2.0 - strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.y / pixelRatio, flip_pos.y - height / 2.0 + strokeWidth / 2.0));
    return x_in * y_in;
}

float inRectBorder() {
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    float x_in_outer = step(gl_FragCoord.x / pixelRatio, flip_pos.x + width / 2.0 + strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.x / pixelRatio, flip_pos.x - width / 2.0 - strokeWidth / 2.0));
    float y_in_outer = step(gl_FragCoord.y / pixelRatio, flip_pos.y + height / 2.0 + strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.y / pixelRatio, flip_pos.y - height / 2.0 - strokeWidth / 2.0));
    float x_in_inner = step(gl_FragCoord.x / pixelRatio, flip_pos.x + width / 2.0 - strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.x / pixelRatio, flip_pos.x - width / 2.0 + strokeWidth / 2.0));
    float y_in_inner = step(gl_FragCoord.y / pixelRatio, flip_pos.y + height / 2.0 - strokeWidth / 2.0) * (1.0 - step(gl_FragCoord.y / pixelRatio, flip_pos.y - height / 2.0 + strokeWidth / 2.0));
    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);
}

float inCircle() {
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;
    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
    float dist_in_r = step(dist, r - strokeWidth / 2.);
    return dist_in_r;
}

float inCircleBorder() {
    if (strokeWidth == 0.) {
      return 0.;
    }
    vec2 flip_pos = position;
    flip_pos.y = viewport.y - position.y;

    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);
    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);
    float drawInner = 1. - step(r - strokeWidth / 2., dist);
    return drawOuter * (1. - drawInner);
}

void main(void) {
    if (shape == 0.0) {
        // circle shape
        // border check, using 0.5(center of smoothstep)
        if (inCircle() < 1. && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {
            discard;
        }
        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);
    } else if (shape == 1.0) {
        // rect shape
        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);
    }
    
}