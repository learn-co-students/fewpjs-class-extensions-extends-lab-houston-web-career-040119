// Your code here
class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        function getSum(total,num){
            return total + num
        }
        return this.array.reduce(getSum,0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        if ((this.array[0] + this.array[1]) < this.array[2]){
            return false}
        if ((this.array[1] + this.array[2]) < this.array[0]){
            return false}
        if ((this.array[2] + this.array[0]) < this.array[1]){
            return false}
        else return true
    }
}

class Square extends Polygon {
    get isValid () {
        if (this.array[0] != this.array[1])
        {return false}
        if (this.array[0] != this.array[2])
        {return false}
        if (this.array[0] != this.array[3])
        {return false}
        else return true
    }
    get area(){
        return this.array[0] * this.array[0]
    }
}