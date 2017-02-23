varying vec3 vPos;
varying vec2 vUv;
uniform vec3 tweetPos;
uniform float animTime;

@import ./includes/range;

void main() {

  vec3 color_side = vec3(0.86, 0.93, 0.965);
  vec3 color_bg = vec3(0.55, 0.75, 0.86);
  vec3 color_twitter = vec3(0.2, 0.8, 1.0);
  vec3 color_link = vec3(0.0, 0.52, 0.705);

  float anim = animTime;
  float circle_rad = 0.5 * anim;
  float border = 0.0075;

  float dist = distance(vPos, tweetPos);
  float rim = smoothstep(circle_rad + border, circle_rad - border, dist * 0.985);
  rim *= 1.0 - anim;
  float interior = smoothstep(circle_rad - border, circle_rad + border, dist);
  float interiorMod = range((anim - 1.0) * 0.5, anim, interior);
  float alpha = rim * interiorMod;

  vec3 color = mix(color_twitter, color_side, interior);

  gl_FragColor = vec4(color, alpha);

}
