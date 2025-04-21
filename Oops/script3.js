// class Student {
//     constructor(fn, ln, adharCard) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharCard = adharCard
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student {
//     // incorrect way 
//     // constructor(fn, ln, adharCard,salary) {
//     //     this.firstName = fn
//     //     this.lastName = ln
//     //     this.adharCard = adharCard
//     //     this.salary = salary
        
//     // }
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// amol = new Teacher("amol","rao",123)
// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharCard)
// amol.displayName()
// amol.displaySalary()

// program 1 

// class Student {
//     constructor(fn,ln,adharCard){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharCard = adharCard
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student {
//     constructor(fn,ln,adharCard,salary){
//         super(fn,ln,adharCard)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// amol2 = new Teacher("amol","rao",345,1000)
// console.log(amol2.salary)
// console.log(amol2.firstName)
// console.log(amol2.lastName)
// console.log(amol2.adharCard)
// amol2.displayName()
// amol2.displaySalary()

// multi-level 


class Grandfather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends Grandfather {

    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn 
    }

    displayFName(){
        console.log(this.fname + this.lastName)
    }

}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }

    displaySname(){
        console.log(this.sname + this.lastName)
    }

}

chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySname()

// herarchical inhertance 
// one parent two child 



