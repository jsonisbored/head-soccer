import { a } from "./physics";
println(a);
function number() {
  return [];
}
function _boolean() {
  return [];
}
;
// type System = (params: SystemParam) => unknown;

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
function update_position(_ref) {
  var _ref$entities = _ref.entities,
    pos = _ref$entities.pos,
    vel = _ref$entities.vel;
  for (var i = 0; i < pos.x.length; i++) {
    pos.x[i] += vel.x[i];
    pos.y[i] += vel.y[i];
  }
}
function log_ping(_ref2) {
  var ping = _ref2.resources.delta;
  println(ping);
}
var last_frame = millis();
function draw() {
  resources.delta = millis() - last_frame;
  last_frame = millis();
  var data = {
    entities: entities,
    resources: resources
  };
  log_ping(data);
  update_position(data);
}
draw();