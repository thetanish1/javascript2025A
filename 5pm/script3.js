// Gym 
// action - excercise 
// return - health

// program 1

let names = ["chinmay","sarika","poorva"]
let q1 = names.push("sumit")
console.log(names)
console.log(q1)

let q2 = names.unshift('rahul')
console.log(names)
console.log(q2)


// program 2 
let fruits = ["apple","mango","banana","orange","chikoo"]
let q3 = fruits.pop()
console.log(q3)
console.log(fruits)

let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

// push() - new length
// unshift() -  new length
// pop() - same element
// shit() - same element

// progrm 3
//              0        1        2         3          4
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
let q5 = cities.includes("Pune")
console.log(q5)

let q6  = cities.indexOf("mumbai")
console.log(q6)
let q7 = cities.indexOf('chennai')
console.log(q7)


// program 4
cities = ["pune","mumbai","banglore","kolkata","chennai"]
cities.reverse()
console.log(cities)

cities.sort()
console.log(cities)


// program 5
let a = [11,22,33]
let b = [44,55,66]
let q8 = a.concat(b)
console.log(q8)