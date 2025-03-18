// program 1

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:45,
    rollNo:45

}
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45
    
}

// 10 objects ======> 50 lines of code
// user defined data type
// class 

class Person {

    firstName= undefined   
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let amol2 = new Person()
console.log(amol2)

let chinmay2 = new Person()
console.log(chinmay2)

chinmay2.firstName = "chinmay2"
chinmay2['lastName'] = "deshpande2"
chinmay2.age = 45
chinmay2.rollNo = 123
console.log(chinmay2)

// program 3

class PersonB {
    constructor(fn,ln,ag,rollNo){
        this.firstName  = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
    }

}
let sarika = new PersonB("sarika","pansare",26,55)
let mayuri = new PersonB("mayuri","rao",36,53)

console.log(sarika)
console.log(mayuri)

sarika.language = "marathi"
console.log(sarika)

let sarikaB = sarika
sarikaB['firstName'] = "sarika p"
console.log(sarika)
console.log(sarikaB)

let names = ["amol","sumit","ram"]
let namesN  = names

names[0] = "rahul"
console.log(names)
console.log(namesN)
