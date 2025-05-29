class Person {
    fn = undefined
    ln = undefined

    walk(){
        console.log("I am walking.....")
    }
}
// let x = 10
// let y = "chinmay"
// let c = true

let chinmay = new Person()
console.log(chinmay.fn)
console.log(chinmay.ln)
chinmay.walk()
chinmay.fn = "chinmay"
chinmay['ln'] = "deshpande"
console.log(chinmay)

let amol = new Person()
console.log(amol.fn)
console.log(amol.ln)
amol.walk()

console.log(amol.fn)
console.log(amol.ln)
amol.fn = "amolR"
amol.ln = "amolRRR"

class Person {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    walk(){
        console.log("i am walking")
    }
}
let chinmay2  = new Person("ninad","dani")
let mayuri2 = new Person("mayuri","rao")

console.log(chinmay2.fn)
console.log(chinmay2.ln)