// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((total, num) => { return total + num })
    }
}

class Triangle extends Polygon {
    get isValid() {
        let result
        if (this.countSides == 3 ) {
            for (let side of this.sides) {
                if (this.perimeter - side > side) {
                    result = true
                } else {
                    result = false
                    return false
                }
            }
        } else {
            return false
        }
        return result
    }
}

class Square extends Polygon {
    get isValid() {
        let oneSide = this.sides[0]
        let result
        this.sides.forEach( side => {
            if (side == oneSide) {
                result = true
            } else {
                result = false
            }
        })
        return result
    }

    get area() {
        if (this.isValid) {
            let oneSide = this.sides[0]
            return oneSide * oneSide
        }
    }
}