class Polygon {
    constructor(integerArr) {
        this.integerArr = integerArr
    }

    get countSides(){
       return this.integerArr.length
    }

    get perimeter() {
        return this.integerArr.reduce((total, number) => {
            return total + number
        })
    }


}

class Triangle extends Polygon {

    get isValid() {
       let sides = this.integerArr
       if ((sides[0]+sides[1]) > sides[2] && (sides[1]+sides[2]) > sides[0] && (sides[0] + sides[2]) > sides[1]) {
        return true
       }
       else {
           return false
       }
    }
       
}

class Square extends Polygon {

    get isValid() {
        let sides = this.integerArr
        if (sides[0] == sides[1] && sides[1] == sides[2] && sides[2] == sides[3]) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.integerArr[0] * this.integerArr[1]
    }
}

// let square = new Polygon([1,2,3,4])
// console.log(square.perimeter)

let bob = new Triangle([8,4,5])
console.log(bob.isValid)
