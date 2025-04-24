// // Js object 
// // object literal 
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     rollNo:"29",
//     displayName:function(){
//         console.log(this.firstName+ this.lastName)
//     }

// }
// let chinmay =  {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:"30",
//     displayName:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// // 100 - 500 lines
// // function constructor

// function Person(fn,ln,rollNo){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.rollNo = rollNo
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol2 = new Person("amol2","rao2",23)
// let chinmay2 = new Person("chinmay2","deshpande2",24)

// console.log(amol2)
// console.log(chinmay2)

// // Es6 class

// class Person2 {
//     constructor(fn,ln,rollNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.rollNo = rollNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol3 = new Person2("amol3","rao3",34)
// let chinmay3 = new Person2("chinmay3","deshpande3",23)
// console.log(amol3)
// console.log(chinmay3)
// chinmay3.displayName()
// amol3.displayName()

// Object.create()

let amol4  = Object.create({})
console.log(amol4)
amol4.firstName = "amol"
amol4.lastName = "rao"
amol4.rollNo = 22
amol4.displayName = function(){
    console.log(this.firstName + this.lastName)
}
console.log(amol4)


