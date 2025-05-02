// program 1
let birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    return 2025 - el
})
console.log(q1)

// program 2
// filter method
//           0  1  2  3  4  5  6
let marks = [92,89,77,74,65,69,63]
let q2 = marks.filter(function(el,index,arr){
    return  el > 70
})
console.log(q2)

// program 3
let numbers = [11,22,33]
let q3 = numbers.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q3)

// program 4
let cities = ["pune","mumbai","banglore"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5
//              0  1  2  3  4  5 6
let numbersB = [11,56,77,44,55,66,77]
let q4 = numbersB.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)

// find()
let q5 = numbersB.find(function(el,index,arr){
    return el > 50
})
console.log(q5)

// findIndex()
let q6 = numbersB.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q6)



// every()
let j = [11,22,33,44,55,11]

let q7 = j.every(function(el,index,arr){
    return el > 15
})
console.log(q7)

// some()
let q8 = j.some(function(el,index,arr){
    return el > 150
})
console.log(q8)

// map() , filter(), reduce(),some(),every(),forEach(),find(),findIndex()


// slice()
//             0        1       2       3       4
let names = ["chinmay","ram","sarika","sham","sandeep"]
//             -5      -4      -3        -2       -1
//names.slice(startIndex,endIndex(notincluded))

console.log(names.slice(3))
console.log(names.slice(1,4))
console.log(names.slice(0,-1))
console.log(names.slice(-4,4))
console.log(names.slice(-4))
console.log(names.slice(-1,-4))


// splice()
//               0        1       2        3       4
let fruits  = ["apple","mango","banana","orange","grapes"]
//fruits.pop()
// fruits.shift()
// fruits.splice(startIndex,numberOfElementstoBeRemoved)
// fruits.splice(startIndex,numberOfElementstoBeRemoved,"rep1","rep2")
// fruits.splice(1,2)
fruits.splice(3,1,"papaya")
console.log(fruits)

// flat()

//                     0                   1                   2
//                 0       1         0          1         0          1
let  states = [["nagpur","mumbai"],["jaipur","udaipur"],["chennai","ooty"]]
console.log(states[1][0])
console.log(states[2][1])
let w3 = states.flat()
console.log(w3)

// join()

let info = ["chinmay","deshpande",7709192441]
let q33 = info.join('@')
console.log(q33)


// fill()
//        0  1  2  3  4
let g = [11,22,33,44,55]
let r1 = g.fill('@',1,4)
console.log(r1)


// at()
//              0          1      2
let names2 = ["chinmay","amit","shirsh"]
let r2 = names2.indexOf("chinmay")
console.log(r2)
let r3 = names2.at(1)
console.log(r3)