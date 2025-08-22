class Person {
    firstName = undefined
    lastName = undefined
    talk(){
        console.log("I am talking")
    }
    walk(){
        console.log("I am walking")
    }
}
let amol = new Person()
console.log(amol)
console.log(amol.firstName)
console.log(amol.lastName)
amol.walk()
amol.talk()

// amol  object ---> bracket and notation
amol.firstName = "amol"
amol['lastName'] = "rao"
console.log(amol)

let sarika = new Person()
console.log(sarika)
sarika.firstName = "sarika"
sarika.lastName = "pansare"
console.log(sarika)