//              0         1       2
let names = ["chinmay","sarika","poorva"]
// let n1 = names[0]
// let n2 = names[1]
// let n3 = names[2]
// console.log(n1)
// console.log(n2)
// console.log(n3)

// program 2
let [n1,n2,n3] = names
console.log(n1)
console.log(n2)
console.log(n3)

// program 2

let cities = ["pune","mumbai","bangalore"]
let [c1,,c2] = cities
console.log(c1)
console.log(c2)

// program 3

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}
// let {firstName,lastName,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// let {firstName:fn,lastName:ln,age:ag} = info
// console.log(fn)
// console.log(ln)
// console.log(ag)



// program 4 

let states = [["pune","mumbai"],["indore","bhopal"]]
let [[c11,c22],[c33,c44]] = states
console.log(c11)
console.log(c22)
console.log(c33)
console.log(c44)

// program 5

let friends = {
    one:{
        fn:"rahul",
        ln:"singh"
    },
    two:{
        fn:"satendra",
        ln:"rai"
    }
}
let {one:{fn:f1,ln:l1},two:{fn:f2,ln:l2}} = friends
console.log(f1)
console.log(f2)