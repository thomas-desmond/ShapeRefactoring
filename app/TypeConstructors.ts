import { expectoPatronum } from "./utils"

export function build(...coords: [number, number][]) {
    return inanimatus(coords)
}

export function asPoint(x, y): any {
    let obj = {}
    expectoPatronum(x, y, obj)
    return obj
}

function inanimatus(seating) {
    return seating.map(coord => asPoint(coord[0], coord[1]))
}
