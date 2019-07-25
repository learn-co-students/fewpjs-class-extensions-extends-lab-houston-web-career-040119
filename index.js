// Your code here
class Polygon{
    constructor(array){
        this.array = array
    }
    
    get countSides(){
        return this.array.length
    }
    
    get perimeter(){
        let total=0
        this.array.forEach(function(x){
            total = total + x
        })
        this.sumSides = total
        return this.sumSides
    }
}

class Triangle extends Polygon{
    get isValid(){
        
        if (this.countSides === 3){
            let side1 = this.array[ 0 ]
            let side2 = this.array[ 1 ]
            let side3 = this.array[ 2 ]
            return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
        }else{
            return false
        }
        
    }
}


class Square extends Polygon{
    get isValid(){
        if (this.countSides === 4){
            return((this.array[0] === this.array[1]) && (this.array[0] === this.array[2]) && (this.array[0] === this.array[3]))
            
        }else{
            return false
        }
        

    }
    
    
    get area(){
        return (this.array[0] * this.array[2])
    }
}