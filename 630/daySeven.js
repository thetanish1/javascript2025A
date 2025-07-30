
function add(){
    return "hello"
}
let q1  = add()
console.log(q1)



// Gym 
// action - exercise
// return - health

// push 
// action - add the element to end of array
// return length 

let names  = ["sarika","poorva","shrddha","ram"]
let q2 = names.push("sham")
console.log(names)
console.log(q2)

let q3 = names.shift()
console.log(names)
console.log(q3)

let q4 = names.unshift("sachin")
console.log(q4)

let q5 = names.pop()
console.log(q5)
console.log(names)

let colors = ["red","blue","black","green"]
let q6 = colors.includes('Red')
console.log(q6)

//         0      1      2       3
colors = ["red","blue","black","green"]
let q7 = colors.indexOf("Blue")
console.log(q7)

let q8 = colors.at(2)
console.log(q8)


// program 3
let cities = ["pune","mumbai","chennai","bangalore","kolkata"]
let q9 = cities.reverse()
console.log(cities)
console.log(q9)

cities.sort()
console.log(cities)

let a1 = [11,22,33]
let a2 = [44,55,66]

let a3 = a1.concat(a2)
console.log(a3)

let info = ["chinmay","deshpande",7709192441]
let r4 = info.join('-')
console.log(r4)

// map(), filter(), reduce(), forEach()
// every(),some(),find(),findIndex()