import { a } from "./physics";
println(a);

function number(): number[] {
    return [];
}
function boolean(): boolean[] {
    return [];
}

interface Entities {
    [k: string]: Entities | unknown[];
};
type SystemParam = {
    resources: typeof resources,
    entities: Record<string, unknown>,
};
// type System = (params: SystemParam) => unknown;

const resources = {
    delta: 0,
};

const entities = {
    player: {
        speed: number(),
        jump: number(),
        power: number(),
        jumping: boolean(),
        jumps: number(),
        max_jumps: number(),
        team: number(),
    },
    ball: {
        bounce: number(),
    },
    pos: {
        x: number(),
        y: number(),
    },
    vel: {
        x: number(),
        y: number(),
    },
} satisfies Entities;

function update_position({}) {}
function log_ping({ resources: {delta: ping} }: SystemParam) {
    println(ping);
}

let last_frame = millis();
function draw() {
    resources.delta = millis()-last_frame;
    last_frame = millis();

    const data: SystemParam = {
        entities,
        resources,
    };

    log_ping(data);
}
draw();
