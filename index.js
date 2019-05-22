// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    let perimeter = 0
    this.sides.forEach(length => {
      perimeter += length
    })
    return perimeter
  }
}
class Triangle extends Polygon {
  get isValid() {
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    return (this.countSides === 3 && ((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1))
  }
}
class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1]
  }

  get isValid() {
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    let s4 = this.sides[3];
    return (this.countSides === 4 && s1 === s2 && s2 === s3 && s3 === s4)
  }
}
