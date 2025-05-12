// object literal 


// let amol1 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:24,
//     rollNo:34
// }

// program 1
// class Person {
    
//     firstName = undefined
//     lastName = undefined
//     age  = undefined
//     rollNo = undefined

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = new Person()
// let chinmay = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)

// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 12
// amol.rollNo = 34

// console.log(amol)
// console.log(chinmay)


// program 2
// class Person {

//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = age 
//         this.rollNo = rollNo
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// let chinmay2 = new Person("chinmay","deshpande",12,34)
// console.log(chinmay2.firstName)
// console.log(chinmay2.lastName)
// console.log(chinmay2.age)
// console.log(chinmay2.rollNo)
// chinmay2.displayName()


// program 3
// using setter and getter method
class Person {
    setFirstName(fn){
        this.firstName = fn 
    }
    setLastName(ln){
        this.lastName = ln 
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rollNo){
        this.rollNo = rollNo
    }

}

let chinmay3 = new Person()
console.log(chinmay3)
chinmay3.setFirstName("chinmay3")
chinmay3.setLastName("deshpande3")
chinmay3.setRollNo(12)
chinmay3.setAge(34)
console.log(chinmay3)

chinmay3.city = "pune"
chinmay3.language = "marathi"
console.log(chinmay3)


// program 4
// using set and get keyword 
// as property 


// let info  = {

//     firstName:"chinmay",
//     lastName:"deshpande"

// }
// console.log(info.firstName)
// info.firstName = "tanmay"
// info.city = "pune"


class Person4 {

  set  firstN(fn){
    this.firstName = fn
  } 
  get firstN(){
    return this.firstName
  }

  set lastN(ln){
    this.lastName = ln 
  }

  get lastN(){
    return this.lastName
  }

  set ag(age){
    this.age = age
  }

  get ag(){
    return this.age
  }


  set rollN(rn){
    this.rollNo = rn
  }

  get rollN(){
    return this.rollNo
  }


}

let q1 = new Person4()
console.log(q1)

q1.firstN = "chinmay"
q1.lastN = "deshpande"
q1.rollN = 45
q1.ag = 23


console.log(q1)
console.log(q1.firstN)
console.log(q1.lastN)
console.log(q1.rollN)
console.log(q1.ag)


// object literal 
// class
// class with constructor 
// setter methods
// set and get keyword

