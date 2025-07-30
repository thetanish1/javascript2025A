
//               0        1         2
let names = ["chinmay","sarika","poorva"]
console.log(names[0])


// duplicate check
names = ["chinmay","sarika","poorva","poorva"]
console.log(names)

// update firstValue
names[0] = "samay"
console.log(names)

// JS object ----> properties and method
//              0       1        2        3       4
let fruits = ["apple","mango","banana","orange","grapes"]
console.log(fruits.length)
console.log(fruits)
// length - 1 is always the lastIndex


//          0        1       2        3        4
fruits = ["apple","mango","banana","orange","grapes"]
for(let i = 0 ; i < fruits.length ; i++){ 
    //console.log(i) 
    console.log(fruits[i])
}


let i2 = 0 
while(i2 < fruits.length){
    //console.log(i2)
    console.log(fruits[i2])
    i2 = i2 + 1
}

// Methods 

// Gym() 
// action - excercise
// retunr - health , muscles

// function addition(a,b){
//     console.log(a+b)
//     return "hello"
// }
// let e =  addition(13,4)
// console.log(e)


// push()

let cities = ["pune","mumbai","banglore","kolkalta"]
let q1 = cities.push("nagpur")
console.log(cities)
console.log(q1)

// unshit()
cities = ["pune","mumbai","banglore","kolkalta"]
let q2 = cities.unshift('wardha')
console.log(q2)
console.log(cities)

// pop()
cities = ["pune","mumbai","banglore","kolkalta"]
let q3 = cities.pop()
console.log(cities)
console.log(q3)

// shift()
cities = ["pune","mumbai","banglore","kolkalta"]
let q4 = cities.shift()
console.log(q4)
console.log(cities)

// includes()
cities = ["pune","mumbai","banglore","kolkalta"]
let q5  = cities.includes('Pune')
console.log(q5)
