
class Person {
    fn = undefined
    ln = undefined

    displaName(){

        console.log(this.fn + this.ln)
    }
}

let chinmay = new Person()
console.log(chinmay)
chinmay.fn = 'chinmay'
chinmay.ln = 'deshpande'
console.log(chinmay)

chinmay.displaName() // this ---> chinmay

let amol  = new Person()
console.log(amol)
amol.fn = "amol"
amol.ln  = "rao"
amol.displaName() // this ---> amol
