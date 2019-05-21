// Your code here

class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }

  get countSides() {
    return this.sideLengths.length;
  }

  get perimeter() {
    let result = 0;
    for(let i = 0; i < this.sideLengths.length; i++) {
      result += this.sideLengths[i];
    }
    return result;
  }
}

class Triangle  extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }

    let f = (a,b,c) => ((a+b-c)>0); 

    let a = this.sideLengths[0];
    let b = this.sideLengths[1];
    let c = this.sideLengths[2];
    if ( (!f(a,b,c)) || (!f(c,a,b)) || (!f(b,c,a)) ) {
      return false;
    }

    return true;
  }
}

class Square extends Polygon {
  get area() {
    return this.sideLengths[0] * this.sideLengths[1];
  }

  get isValid() {
    if (this.countSides !== 4) {
      return false;
    }

    let a = this.sideLengths[0];
    let b = this.sideLengths[1];
    let c = this.sideLengths[2];
    let d = this.sideLengths[3];
    if( (a !== b) || (b !== c) || (c !== d) || (d !== a) ) {
      return false;
    }

    return true;
  }
}
