

// rest operator

function sum(...numbers){ // parameter
    return numbers.reduce(function(acc,el){
        return acc + el
    },0)
}
let q = sum(1,2,3,4,5,6,7,8,3,4)
console.log(q)


// program 2

let cities = ["pune","nagpur","mumbai","kolkata"]

function firstThree(a,b,c){
    console.log(`welcome ${a}`)
    console.log(`welcome ${b}`)
    console.log(`welcome ${c}`)
}
firstThree(...cities) // actual arguments

//[1,2,3]  ----> 1,2,3

// program 2

let names  = ["chinmay","sarika","ram"]
// let names2 = names
// names2[0] = "poorva"
// console.log(names)
// console.log(names2)
let names3 = [...names]
console.log(names3)
names3[0] = "poorva"
console.log(names3)
console.log(names)


// program 3

let city2 = ["pune","mumbai","bangalore"]
let city3 = ["nagpur","wardha","chennai"]
console.log(city2.concat(city3))
let city4 = [...city2,...city3,"chandrapur"]
console.log(city4)


// program 4

let numbers = [11,22,33,44,55]

let [a,...a1] = numbers
console.log(a1)


// program 5 

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    city:"pune"
}
let {firstName,...info2} = info 
console.log(info2)
console.log(firstName)
console.log(info2)

// program 6

let obj1 = {
    one:1,
    two:2
}

let obj2 = {
    three:3,
    four:4
}

let obj3 = {...obj1,...obj2,five:5}
console.log(obj3)

// rest and spread 
// functions 
// arrays 
// objects




// Oops
// Ajax 