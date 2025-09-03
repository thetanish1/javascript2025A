// program 1
// Incorrect way of writing code
class Studente {
    firstName = "chinmay"
    lastName = "deshpande"
    age = 23
}

class Teachere {
    firstName = "chinmay"
    lastName = "deshpande"
    age = 23
    salary = 10000

}

let chinmayTe = new Teachere()
console.log(chinmayTe.firstName)
console.log(chinmayTe.lastName)
console.log(chinmayTe.age)
console.log(chinmayTe.salary)

// let chinmay = new Student()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)


// program 2
// 2nd way using inheritance
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     age = 23
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 10000
// }

// let chinmayT = new Teacher()
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.age)
// console.log(chinmayT.salary)
// chinmayT.displayName()

// program 3
// Parent having construtor and child not having constructor
class StudentT {
    constructor(fn,ln,dob){
        this.firstName = fn 
        this.lastName = ln 
        this.dob = dob
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherT extends StudentT {
    salary  = 1000
}

let vikasT = new TeacherT("vikas","sharma","7nov")
console.log(vikasT.firstName)
console.log(vikasT.lastName)
console.log(vikasT.dob)
console.log(vikasT.salary)
vikasT.displayName()

// single inheritance


// multi-level inheritance


//  herarchical inheritance