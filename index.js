// Your code here
class Polygon{
  constructor(arr){
    this.sides = arr
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total,num) => {return total + num},0)
  }

}

class Triangle extends Polygon{

  get isValid(){
    let sides = this.sides.sort(function(a, b){return b - a})
    if ( 2 * sides[0] > this.perimeter ) {return false}
    else {return true}
  }

}

class Square extends Polygon {

  get isValid(){
    if (this.sides.every((v) => v === this.sides[0]) ){return true}
    else {return false}
  }

  get area(){
    return this.sides[0] ** 2
  }

}
