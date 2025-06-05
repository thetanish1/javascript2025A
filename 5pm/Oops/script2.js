let amol = {
    firstName:"amol",
    lastName:"rao",
    age:13,
    skills:["python","sql"]
}
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    skills:["html","css"]
}
// 100 objects ---- > 400 lines

// program 2

// class Person {
//     firstName= undefined
//     lastName = undefined
//     age = undefined
//     skills = undefined

// }

// let amolE = new Person()
// let chinmayE = new Person()
// console.log(amolE)
// console.log(chinmayE)
// amolE.firstName = "amol"
// chinmayE['lastName'] = "deshpande"
// console.log(amolE)
// console.log(chinmayE)

// Setting the values at the time of object creation using constrcutor

// class Person {

//     constructor(firstName,lastName,age,skills){
//         this.fn = firstName
//         this.lastName = lastName
//         this.age  = age 
//         this.skills = skills
//     }
//     displayCountry(){
//         return "India"
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//         console.log(this.displayCountry())
//     }

// }

// let amolG = new Person("amolG","raoG",23,["python","java","css"])
// console.log(amolG.firstName)
// console.log(amolG.lastName)
// console.log(amolG.age)
// console.log(amolG.skills)
// amolG.displayName()
// amolG.displayCountry()


// program 3

// Setting the properties using getter and setter methods 

class Person3{
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }

}

let amol3  = new Person3()
console.log(amol3)

amol3.setFirstName('hemant')
amol3.setLastName("maurya")
console.log(amol3)

console.log(amol3.getFirstName())
console.log(amol3.getLastName())

// Program 4
// Setting properties using get and set keyword as properties  

// let mayuri = {
//     firstName:"mayuri",
//     lastName:"rao"
// }
// console.log(mayuri)
// mayuri.city = "pune"
// console.log(mayuri)

class Person4 {
    set setFn(fn){
        this.firstName = fn
    }
    get setFn(){
        return this.firstName
    }

    set setLn(ln){
        this.lastName = ln
    }
    get setLn(){
        return this.lastName
    }
}
let amol4 = new Person4()
amol4.setFn = "ninad"
amol4.setLn  = "dani"
console.log(amol4)
console.log(amol4.setLn)
console.log(amol.setFn)



