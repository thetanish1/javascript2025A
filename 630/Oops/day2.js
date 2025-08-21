
// prog
class Person  {
    // properties 
    firstName = undefined
    lastName = undefined
    // methods 
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
// let amol  = new Person()
// let chinmay = new Person()
// console.log(chinmay)
// chinmay.firstName = "chinmay"
// chinmay.lastName = "deshpande"
// chinmay.age = 12
// console.log(chinmay)

// amol --> person  type
// firstName and lastName properties and method displayName
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol)

// //udpdating the property 
// amol.firstName = "amol"
// amol['lastName'] = "rao"
// console.log(amol) 


// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// 10 - 15 properties

// program 2
// Setting the value at the time of object creation 

// class Person2 {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol = new Person2("amol","rao")
// let chinmay = new Person2("chinmay","deshpande")
// console.log(amol)
// console.log(chinmay)
// chinmay.displayName()

// program 3 

// Setting the values using setter and getter method

class Person3 {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }

}
let amol3 = new Person3()
console.log(amol3)
amol3.setFirstName("amolk")
amol3.setLastName("raok")
console.log(amol3)

let chinmay3 = new Person3()
console.log(chinmay3)
chinmay3.setFirstName("chinmay3")
console.log(chinmay3)
chinmay3.setLastName('deshpande3')
console.log(chinmay3)

// next session tommorow
// object topic 