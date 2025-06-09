// class Student {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

// }

// class Teacher {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     salary = 10000
// }

// program 1 

// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

// }

// class Teacher  extends Student {
//     salary = 1000
// }
// teacherA  = new  Teacher()
// console.log(teacherA.firstName)
// console.log(teacherA.lastName)
// console.log(teacherA.adharNo)
// console.log(teacherA.salary)


// program 2


// class Student {
//     constructor(fn,ln,adhar){
//         this.firstName = fn 
//         this.lastName  =  ln 
//         this.adharNo = adhar
//     }

//     displayName(){
//         console.log(this.firstName  + this.lastName)
//     }
// }
// class Teacher extends Student {
//     salary = 10000
// }

// let teacherB  = new Teacher("chinmayT","DeshpandeT",23444)
// console.log(teacherB.salary)
// console.log(teacherB.firstName)
// console.log(teacherB.lastName)
// console.log(teacherB.adharNo)
// teacherB.displayName()

// program 3
// Parent is having constructor and child also having constructor 

class Person {
    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo = adharNo
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Person {
    constructor(fn,ln,adharNo,salary){
        super(fn,ln,adharNo)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}
let teachA = new Teacher("ninad","dani","232",10000)
teachA.displayName()
teachA.displaySalary()
console.log(teachA.salary)
console.log(teachA.firstName)
console.log(teachA.lastName)
console.log(teachA.adharNo)

// Mutli-level inheritance 
// Herarchical interitance


