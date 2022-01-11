class Point  {
    type: string;
    x: any;
    y: any;

    constructor(x?, y?) {
        this.type = 'Point';
        this.x = x ?? 0;
        this.y = y ?? 0;
    }
}

export function build(...coords: [number, number][]) {
    return inanimatus(coords)
}

export function asPoint(x, y): Point {
    return new Point(x,y)
}

function inanimatus(seating) {
    return seating.map(coord => asPoint(coord[0], coord[1]))
}
