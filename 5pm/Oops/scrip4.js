
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
// }

// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     salary = 1234
// }

// program 1


// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123 
// }

// class Teacher extends  Student {

//     salary = 1000
// }
// let abc = new Teacher()
// console.log(abc.firstName)
// console.log(abc.lastName)
// console.log(abc.adharNo)
// console.log(abc.salary)


// program 2

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    salary = 1000
}

let abc2 = new Teacher("chinmay","deshpande")
console.log(abc2.firstName)
console.log(abc2.lastName)
console.log(abc2.adharNo)
console.log(abc2.salary)
abc2.displayName()


// program 3
// single inheritance


class StudentN {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends  StudentN {
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}

let abc3  = new Teacher("amol","rao",1000)
console.log(abc3.firstName)
console.log(abc3.lastName)
console.log(abc3.salary)
abc3.displayName()
abc3.displaySalary()

// program 5

class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends  GrandFather{
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
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fname)
console.log(chinmay.sname)

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()












