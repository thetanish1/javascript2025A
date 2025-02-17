
// push()
let cities = ['pune',"mumbai","bangalore","chennai"]
let q1 = cities.push("nagpur")
console.log(q1)
console.log(cities)

// unshift()
let q2 = cities.unshift('wardha')
console.log(cities)
console.log(q2)

let country = ["india","srilanka","china","cuba"]
// pop()
let q3 =country.pop()
console.log(q3)
console.log(country)

// shift()
let q4 = country.shift()
console.log(q4)
console.log(country)

//push()
//unshift()
//pop()
//shift()


// includes()
let fruits = ["apple","banana","grapes","chikoo"]
let q5 = fruits.includes('Apple')
let q6 = fruits.includes('apple')
console.log(q5)
console.log(q6)

// indexOf()
//          0        1         2       3
fruits = ["apple","banana","grapes","chikoo"]
let q7 = fruits.indexOf('banana')
console.log(q7)
let q8 = fruits.indexOf('Banana')
console.log(q8)

// at()
fruits = ["apple","banana","grapes","chikoo"]
let q9 = fruits.at(2)
console.log(q9)

// reverse()
fruits = ["apple","banana","grapes","chikoo"]
fruits.reverse()
console.log(fruits)
// sort() --> string
fruits = ["apple","banana","grapes","chikoo"]
fruits.sort()
console.log(fruits)

// join()
let info = ["chinmay","deshpande",7709192441]
let q10 = info.join(" ")
console.log(q10)
// contact()
let numbersA = [11,22,33]
let numbersB = [44,55,66]
let numbersC = numbersA.concat(numbersB)
console.log(numbersC)

// flat()
//                   0                 1                      2
 //               0       1        0         1          0        1
let state  = [["mumbai","pune"],["jaipur","udaipur"],["indore","bhopal"]]
console.log(state[0][1])
console.log(state[2][1])
let q12 = state.flat()
console.log(q12)