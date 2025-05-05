let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

 function Person(fn,ln,age){
    this.firstName = fn
    this.lastName  = ln 
    this.age = age 
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
 }
 let amol2 = new Person("amol2","rao2",12)
 let chinmay2 = new Person("chinmay2","deshpande2",12)

//  console.log(amol2)
//  console.log(chinmay2)

//  amol2.displayName()
//  chinmay2.displayName()

// every object has __proto __ == Parent.protype
console.log(amol2)
console.log(chinmay2)

console.log(amol2.__proto__ == Person.prototype)
console.log(chinmay2.__proto__ == Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.city = "pune"
console.log(amol2)
console.log(chinmay2)

 amol2.displayName()
 chinmay2.displayName()

 console.log(amol2)
 console.log(chinmay2)
 console.log(chinmay2.city)

//Es6

class Person2 {
    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
        
    }

    displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}


let amol3 = new Person2("amol3","rao3",34)
let chinmay3 = new Person2("chinmay3","rao3",45)
 
console.log(amol3)
console.log(chinmay3)

amol3.displayName()
chinmay3.displayName()