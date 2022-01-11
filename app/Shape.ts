export type Line = {
    type: string;
    length: number;
    slope: any;
    p1: any;
    p2: any;
}

export type Angle = {
    p1: any;
    vertex: any;
    p2: any;
    degrees: number;
}

export class Shape {
    type?: string
    p1?: any
    p2?: any
    p3?: any
    p4?: any
    length?: number
    slope?: any
    sideA?: Line
    sideB?: Line
    sideC?: Line
    sideD?: Line
    area?: number
    perimeter?: number
    isOpen?: boolean
    isClosed?: boolean
    points?: any
    angleA?: Angle;
    angleB?: Angle;
    angleC?: Angle;
    x?: any;
    y?: any;
}
