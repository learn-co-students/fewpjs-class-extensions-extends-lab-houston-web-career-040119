// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        for(let i = 0; i < this.countSides; i++) {
            sum = sum + this.sides[i]
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides == 3) {
            for(let side of this.sides) {
                if(side < this.perimeter - side) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides == 4 && this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}