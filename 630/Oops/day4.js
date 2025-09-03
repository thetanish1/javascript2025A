
// object literal 
// class properties


let chinmay  = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:13,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol  = {
    firstName:"amol",
    lastName:"rao",
    age:13,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

// 1 object ---- 5 lines code 
// 10 objects - 50 lines of code

// class 
class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    display(){
        console.log(this.firstName + this.lastName)
    }
}
let amol2 = new Person()
// console.log(amol2)
// amol2.display()
// dot notation and bracket notation
// amol2.firstName = "amol2"
// amol2.lastName = "rao2"
// amol2.age = 24
// console.log(amol2)
// amol2.display()

// constructor 
class Person2 {
    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName =ln 
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amole = new Person2("amole","raoe",35)
console.log(amole)
amole.displayName()

// setter and getter method 
class Person3 {
    setFn(fn){
        this.firstName = fn
    }
    setLn(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }

    getAge(){
        return this.age
    }
    

}
let amolR = new Person3()
console.log(amolR)
amolR.setFn("amolr")
amolR.setLn("raoR")
amolR.setAge(12)
console.log(amolR)

// set and get keyword

let amolT ={
    fullName:"amol Rao"
} 

amolT.fullName = "amol rao"
console.log(amolT)
amolT.age = 23


class Person4 {
    set FirstN(fn){
        this.firstName = fn
    }
    get FirstN(){
        return this.firstName
    }
    set LastN(ln){
        this.lastName = ln
    }
    get LastN(){
        return this.lastName
    }

}

let amolRw = new Person4()
console.log(amolRw)
amolRw.FirstN = "amolRRR"
amolRw.LastN = "RaoRRR"
console.log(amolRw.FirstN)
console.log(amolRw.LastN)

// object literal 
// class
// class constuctor 
// setter and getter methods 
// set and get keywords 