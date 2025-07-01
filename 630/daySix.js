
// Arrays 
//              0        1     2       3       4         5
let names = ["chinmay","ram","sham","sachin","ramesh","chinmay"]
console.log(names)
// retrive
console.log(names[0])

// update
names[1] = "sham 2"
console.log(names)

// duplicate values - yes
console.log(names)

// in js everthing is object - properties and method
//              0        1       2       3
let fruits = ["apple","mango","banana","orange"]
console.log(fruits.length)
console.log(fruits[fruits.length-1])
// length - 1 is always lastIndex


// loop 
// for loop
//                  0         1          2       3
let vegetables = ["tomato","cabbage","potato","brinjal"]
for(let i  = 0 ; i < vegetables.length ; i++){
    //console.log(i)
    console.log(vegetables[i])
}

let fruitsB = ["apple","mango","banana","grapes"]
for(let i = 0 ; i < fruitsB.length ; i++){
    //console.log(i)
    console.log(fruitsB[i])
}

for(let i = fruitsB.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(fruitsB[i])
}

// while loop
//               0       1          2         3       4
// let cities  = ["pune","mumbai","banglore","kolkata","chennai"]
// let i1 = 0
// while(i1 < cities.length){
//     console.log(i1)
//     console.log(cities[i1])
//     i1 = i1 + 1
// }

// methods 


// push()
let country = ["india","cuba","china"]
let q1 = country.push("srilanka")
console.log(q1)
console.log(country)
// pop()
country = ["india","cuba","china"]
let q2 = country.pop()
console.log(q2)
console.log(country)
// unshift()
country = ["india","cuba","china"]
let q3  = country.unshift('brazil')
console.log(q3)
console.log(country)
// shift()
country = ["india","cuba","china"]
let q4 = country.shift()
console.log(q4)
console.log(country)

// push() -- add the element to last, new lenth 
// pop()  -- removes the lastElement and return it 
// shift() -- removes the first and return it 
// unshift -- adds first element and return new length 


