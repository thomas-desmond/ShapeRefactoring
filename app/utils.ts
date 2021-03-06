import { classify } from "./Classification"
import { cs, cz } from "./MathHelpers"
import { asPoint } from "./TypeConstructors"









export function sortingHat(roster) {
    let shape: any = null
    let cS: any = null

    const d: any[] = []
    for (let vp = 2; vp < roster.length; vp++) {
        d.push(Math.acos((Math.pow(Math.sqrt(Math.pow(roster[vp - 2].x - roster[vp - 1].x, 2) + Math.pow(roster[vp - 2].y - roster[vp - 1].y, 2)), 2) + Math.pow(Math.sqrt(Math.pow(roster[vp - 1].x - roster[vp].x, 2) + Math.pow(roster[vp - 1].y - roster[vp].y, 2)), 2) - Math.pow(Math.sqrt(Math.pow(roster[vp].x - roster[vp - 2].x, 2) + Math.pow(roster[vp].y - roster[vp - 2].y, 2)), 2)) / (2 * Math.sqrt(Math.pow(roster[vp - 2].x - roster[vp - 1].x, 2) + Math.pow(roster[vp - 2].y - roster[vp - 1].y, 2)) * Math.sqrt(Math.pow(roster[vp - 1].x - roster[vp].x, 2) + Math.pow(roster[vp - 1].y - roster[vp].y, 2)))) * (180 / Math.PI))
    }
    if (3 <= roster.length && (3 <= roster.length && (Boolean(roster[roster.length - 1].type) && roster[roster.length - 1].type === 'Point' && (Boolean(roster[roster.length - 1].x) || roster[roster.length - 1].x === 0) && (Math.abs(roster[0].x - roster[roster.length - 1].x) <= 0.001) && (Boolean(roster[roster.length - 1].y) || roster[roster.length - 1].y === 0) && (Math.abs(roster[0].y - roster[roster.length - 1].y) <= 0.001)))) {
        d.push(Math.acos((Math.pow(Math.sqrt(Math.pow(roster[roster.length - 2].x - roster[roster.length - 1].x, 2) + Math.pow(roster[roster.length - 2].y - roster[roster.length - 1].y, 2)), 2) + Math.pow(Math.sqrt(Math.pow(roster[roster.length - 1].x - roster[1].x, 2) + Math.pow(roster[roster.length - 1].y - roster[1].y, 2)), 2) - Math.pow(Math.sqrt(Math.pow(roster[1].x - roster[roster.length - 2].x, 2) + Math.pow(roster[1].y - roster[roster.length - 2].y, 2)), 2)) / (2 * Math.sqrt(Math.pow(roster[roster.length - 2].x - roster[roster.length - 1].x, 2) + Math.pow(roster[roster.length - 2].y - roster[roster.length - 1].y, 2)) * Math.sqrt(Math.pow(roster[roster.length - 1].x - roster[1].x, 2) + Math.pow(roster[roster.length - 1].y - roster[1].y, 2)))) * (180 / Math.PI))
    }

    if (roster[0]?.v == "Init") {
        shape = cs(0)
        cS = cz()
    }
    else {
        if(roster.length === 0){
            cS = classify([{ v: "Init", areEqual: (_v) => false }])
            shape = {}
        }
        else {
            cS = classify([{ v: "Init", x: "Init", Type: "Initter",  areEqual: (_v) => true }])
            shape = {}
        }
    }

    if (roster.length === cS()) {
        shape.type = 'Empty'
    }
    else {
        cS = cS(1)
        if (roster.length === cS()) {
            Object.keys(roster[0]).forEach((pi) => {
                shape[pi] = roster[0][pi]
            })
        }
        else {
            cS = cS(1)
            if (roster.length === cS() && (roster.filter((value, index, self) => { return self.findIndex(v => Boolean(value.type) && value.type === 'Point' && (Boolean(value.x) || value.x === 0) && (Math.abs(v.x - value.x) <= 0.001) && (Boolean(value.y) || value.y === 0) && (Math.abs(v.y - value.y) <= 0.001)) === index }).length) === cS()) 
            {
                shape.p2 = roster[1]
                shape.p1 = roster[0]
                shape.length = Math.sqrt(Math.pow(roster[0].y - roster[1].y, 2) + Math.pow(roster[0].x - roster[1].x, 2))
                shape.slope = (Math.abs(roster[1].x - roster[0].x) <= 0.001 ? 'Undefined' : ((roster[1].y - roster[0].y) / (roster[1].x - roster[0].x)))
                shape.type = 'Line Segment'
            }
            else {
                cS = cS(2)
                if (roster.length === cS() && (3 <= roster.length && (Boolean(roster[roster.length - 1].type) && roster[roster.length - 1].type === 'Point' && (Boolean(roster[roster.length - 1].x) || roster[roster.length - 1].x === 0) && (Math.abs(roster[0].x - roster[roster.length - 1].x) <= 0.001) && (Boolean(roster[roster.length - 1].y) || roster[roster.length - 1].y === 0) && (Math.abs(roster[0].y - roster[roster.length - 1].y) <= 0.001))) && (roster.filter((value, index, self) => { return self.findIndex(v => Boolean(value.type) && value.type === 'Point' && (Boolean(value.x) || value.x === 0) && (Math.abs(v.x - value.x) <= 0.001) && (Boolean(value.y) || value.y === 0) && (Math.abs(v.y - value.y) <= 0.001)) === index }).length) === (cS() - 1)) 
                {
                    shape.type = 'Triangle'
                    shape.p1 = roster[0]
                    shape.p2 = roster[1]
                    shape.p3 = roster[2]
                    shape.sideA = {
                        type: 'Line Segment',
                        length: Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)),
                        slope: Math.abs(roster[1].x - roster[0].x) <= 0.001 ? 'Undefined' : ((roster[1].y - roster[0].y) / (roster[1].x - roster[0].x)),
                        p1: roster[0],
                        p2: roster[1],
                    }
                    shape.sideB = {
                        p1: roster[1],
                        p2: roster[2],
                        length: Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)),
                        slope: Math.abs(roster[2].x - roster[1].x) <= 0.001 ? 'Undefined' : ((roster[2].y - roster[1].y) / (roster[2].x - roster[1].x)),
                        type: 'Line Segment',
                    }
                    shape.sideC = {
                        p1: roster[2],
                        p2: roster[0],
                        type: 'Line Segment',
                        length: Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)),
                        slope: Math.abs(roster[0].x - roster[2].x) <= 0.001 ? 'Undefined' : ((roster[0].y - roster[2].y) / (roster[0].x - roster[2].x)),
                    }
                    shape.angleA = {
                        p1: roster[1],
                        vertex: roster[2],
                        p2: roster[0],
                        degrees: Math.acos((Math.pow(Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)), 2) + Math.pow(Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)), 2) - Math.pow(Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)), 2)) / (2 * Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)) * Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)))) * (180 / Math.PI),
                    }
                    shape.angleB = {
                        p1: roster[2],
                        vertex: roster[0],
                        p2: roster[1],
                        degrees: Math.acos((Math.pow(Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)), 2) + Math.pow(Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)), 2) - Math.pow(Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)), 2)) / (2 * Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)) * Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)))) * (180 / Math.PI),
                    }
                    shape.angleC = {
                        p1: roster[0],
                        vertex: roster[1],
                        p2: roster[2],
                        degrees: Math.acos((Math.pow(Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)), 2) + Math.pow(Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)), 2) - Math.pow(Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)), 2)) / (2 * Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)) * Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)))) * (180 / Math.PI),
                    }
                    // Formula thanks to https://www.omnicalculator.com/math/triangle-area
                    // Heron's formula: A = 0.25 * ???( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) )
                    shape.area = (0.25 * Math.sqrt(((Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2))) + (Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2))) + (Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)))) * (-(Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2))) + (Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2))) + (Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)))) * ((Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2))) - (Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2))) + (Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2)))) * ((Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2))) + (Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2))) - (Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2))))))
                    shape.perimeter = Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)) + Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)) + Math.sqrt(Math.pow(roster[2].x - roster[0].x, 2) + Math.pow(roster[2].y - roster[0].y, 2))
                }
                else {
                    cS = cS(1) //
                    if (roster.length === cS() && (3 <= roster.length && (Boolean(roster[roster.length - 1].type) && roster[roster.length - 1].type === 'Point' && (Boolean(roster[roster.length - 1].x) || roster[roster.length - 1].x === 0) && (Math.abs(roster[0].x - roster[roster.length - 1].x) <= 0.001) && (Boolean(roster[roster.length - 1].y) || roster[roster.length - 1].y === 0) && (Math.abs(roster[0].y - roster[roster.length - 1].y) <= 0.001))) && (roster.filter((value, index, self) => { return self.findIndex(v => Boolean(value.type) && value.type === 'Point' && (Boolean(value.x) || value.x === 0) && (Math.abs(v.x - value.x) <= 0.001) && (Boolean(value.y) || value.y === 0) && (Math.abs(v.y - value.y) <= 0.001)) === index }).length) === (cS() - 1) && (d.every(d => Math.abs(d - (45 + 45)) <= 0.001)))
                    {
                        shape.type = 'Rectangle'
                        shape.p1 = roster[0]
                        shape.p2 = roster[1]
                        shape.p3 = roster[2]
                        shape.p4 = roster[3]
                        shape.sideA = {
                            type: 'Line Segment',
                            p1: roster[0],
                            p2: roster[1],
                            length: Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)),
                            slope: (Math.abs(roster[1].x - roster[0].x) <= 0.001) ? 'Undefined' : ((roster[1].y - roster[0].y) / (roster[1].x - roster[0].x)),
                        }
                        shape.sideB = {
                            type: 'Line Segment',
                            p1: roster[1],
                            length: Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)),
                            slope: Math.abs(roster[2].x - roster[1].x) <= 0.001 ? 'Undefined' : ((roster[2].y - roster[1].y) / (roster[2].x - roster[1].x)),
                            p2: roster[2],
                        }
                        shape.sideC = {
                            type: 'Line Segment',
                            p1: roster[2],
                            p2: roster[3],
                            slope: Math.abs(roster[3].x - roster[2].x) <= 0.001 ? 'Undefined' : ((roster[3].y - roster[2].y) / (roster[3].x - roster[2].x)),
                            length: Math.sqrt(Math.pow(roster[2].x - roster[3].x, 2) + Math.pow(roster[2].y - roster[3].y, 2)),
                        }
                        shape.sideD = {
                            type: 'Line Segment',
                            p1: roster[3],
                            p2: roster[0],
                            length: Math.sqrt(Math.pow(roster[3].x - roster[0].x, 2) + Math.pow(roster[3].y - roster[0].y, 2)),
                            slope: Math.abs(roster[3].x - roster[0].x) <= 0.001 ? 'Undefined' : ((roster[0].y - roster[3].y) / (roster[0].x - roster[3].x)),
                        }
                        shape.area = Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)) * Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2))
                        shape.perimeter = Math.sqrt(Math.pow(roster[0].x - roster[1].x, 2) + Math.pow(roster[0].y - roster[1].y, 2)) + Math.sqrt(Math.pow(roster[1].x - roster[2].x, 2) + Math.pow(roster[1].y - roster[2].y, 2)) + Math.sqrt(Math.pow(roster[2].x - roster[3].x, 2) + Math.pow(roster[2].y - roster[3].y, 2)) + Math.sqrt(Math.pow(roster[3].y - roster[0].y, 2) + Math.pow(roster[3].x - roster[0].x, 2))
                    }
                    else {
                        cS = cS(-4)
                        if (cS() <= roster.length && 0 <= cS()) {
                            shape.type = 'Other'
                            shape.points = roster
                            shape.isClosed = (3 <= roster.length && (Boolean(roster[roster.length - 1].type) && roster[roster.length - 1].type === 'Point' && (Boolean(roster[roster.length - 1].x) || roster[roster.length - 1].x === 0) && (Math.abs(roster[0].x - roster[roster.length - 1].x) <= 0.001) && (Boolean(roster[roster.length - 1].y) || roster[roster.length - 1].y === 0) && (Math.abs(roster[0].y - roster[roster.length - 1].y) <= 0.001)))
                            shape.isOpen = !(3 <= roster.length && (Boolean(roster[roster.length - 1].type) && roster[roster.length - 1].type === 'Point' && (Boolean(roster[roster.length - 1].x) || roster[roster.length - 1].x === 0) && (Math.abs(roster[0].x - roster[roster.length - 1].x) <= 0.001) && (Boolean(roster[roster.length - 1].y) || roster[roster.length - 1].y === 0) && (Math.abs(roster[0].y - roster[roster.length - 1].y) <= 0.001)))
                            shape.length = (() => { let length = 0; for (let index = 1; index < roster.length; index++) { length += Math.sqrt(Math.pow(roster[index - 1].x - roster[index].x, 2) + Math.pow(roster[index - 1].y - roster[index].y, 2)) } return length })()
                        }
                    }
                }
            }
        }
    }

    return shape
}