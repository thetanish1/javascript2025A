// array 

// Gym -
// action - exercise
// return - health 


// 24 - methods


// push()
let names = ["sarika","poorva","chinmay"]
console.log(names.length)
let q1 = names.push("rahul")
console.log(names)
console.log(q1)
// unshift()

let q2 = names.unshift('snehal')
console.log(q2)
console.log(names)

// pop()

let fruits = ["apple","mango","banana","grapes"]
let q3 = fruits.pop()
console.log(fruits)
console.log(q3)

// shift()
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)


// includes()
let cities = ["pune","mumbai","nagpur","bangalore"]
let q5 = cities.includes("pune")
console.log(q5)


// reverse()
cities = ["pune","mumbai","nagpur","bangalore"]
cities.reverse()
console.log(cities)


// indexOf()
//          0       1        2        3
cities = ["pune","mumbai","nagpur","bangalore"]
console.log(cities[0])
console.log(cities[5])

let q7 = cities.indexOf("mumbai")
console.log(q7)
q7 = cities.indexOf("Mumbai")
console.log(q7)

// at()
let h = cities.at(2)
console.log(h)

// join()

let info = ["nagpur","mumbai","chennai"]
let h2 = info.join(" ")
console.log(h2)
console.log(typeof h2)
