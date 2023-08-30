// dist/physics.js
var a = 2;

// dist/main.js
println(a);
function number() {
  return [];
}
function _boolean() {
  return [];
}
var resources = {
  delta: 0
};
var entities = {
  player: {
    speed: number(),
    jump: number(),
    power: number(),
    jumping: _boolean(),
    jumps: number(),
    max_jumps: number(),
    team: number()
  },
  ball: {
    bounce: number()
  },
  pos: {
    x: number(),
    y: number()
  },
  vel: {
    x: number(),
    y: number()
  }
};
function log_ping(_ref2) {
  var ping = _ref2.resources.delta;
  println(ping);
}
var last_frame = millis();
function draw() {
  resources.delta = millis() - last_frame;
  last_frame = millis();
  var data = {
    entities,
    resources
  };
  log_ping(data);
}
draw();
