
// //                0    1     2    3
// let birthYear = [2000,2001,2002,2003]
// let ages = [] //[25,24]
// // [25,24,23,22]
// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2025 - birthYear[i])
//     let ag = 2025 - birthYear[i]  // 25 // 24
//     ages.push(ag)
// }
// console.log(ages)

// // map function
// //            0    1     2   3
// birthYear = [2000,2001,2002,2003]
// // parameters
// // el
// // i
// // arr
// let q1 = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2025 - el
// })

// console.log(q1)
// // map ==> array

// // program 2
// let arrs = [11,12,13,14]
// // ["$11","$12","$13","$14"]
// let q2 = arrs.map(function(el,index,arr){
//     return `$`+el
// })
// console.log(q2)


// // program 2
// // filer

// let marks = [77,56,74,66,78]
// let above70 = [] // [77]
// // [77,78]
// for(let i = 0 ; i < marks.length ; i++){
//    // console.log(i)
//     console.log(marks[i])
//     if(marks[i] > 70){
//         above70.push(marks[i])
//     }
// }
// console.log(above70)
// let q4 = marks.filter(function(el,index,array){
//     return el > 70
// })
// console.log(q4)

// program 1
let birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)  
    return 2025 - el
})
console.log(q1)

let numbers = [11,22,33,44]
// [12,23,34,45]
let q2 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(q2)

// program 2
// filter 

let marks  = [90,45,67,75,77,89]
// [90,75,77,89]
let q22 = marks.filter(function(el,index,arr){
    return el > 75
})
console.log(q22)

let transactions = [12,33,44,-56,77,-67,55]
let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)
let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)
// program 3
let nums = [11,22,33]
let total = 0
for(let i = 0 ; i < nums.length ; i++){
    total = total + nums[i]
}
console.log(total)
let q33 = nums.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(q33)

let cities = ["pune","mumbai","chennai","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome " + el)
})

// map() , filter() , reduce() , forEach()

//            0  1  2  3  4   5  6
let marksB = [56,66,77,88,99,45,66]
let q44 = marksB.filter(function(el){
    return el > 70
})
console.log(q44)

let q55 = marksB.find(function(el,index,arr){
    return el > 70
})
console.log(q55)

let q66 = marksB.findIndex(function(el,index,arr){
    return el > 70
})
console.log(q66)

marksB = [56,66,77,88,99,45,66]
let q77 = marksB.every(function(el,index,arr){
    return el > 50
})
console.log(q77)

let q88 = marksB.some(function(el,index,arr){
    return el > 100
})
console.log(q88)

// map() , filter() , reduce(), forEach(), find(), findIndex() , some()
// every()

//                   0                    1                2
//                0     1          0         1         0           1
let states = [["pune","mumbai"],["indore","bhopal"],['udaipur',"jaipur"]]
let r1 = states.flat()
console.log(r1)

let cities2 = ["pune","mumbai","banglore"]
let cities3  = ["chennai","rajasthan","jaipur"]
let q11 = cities2.concat(cities3)
console.log(q11)

//               0       1        2           3         4       5
let cities4 = ["pune","mumbai","banglore","kolkata","chennai","delhi"]
//              -6      -5         -4        -3       -2         -1
//cities4.slice(startIndex,endIndex(not included))
console.log(cities4.slice(2))
console.log(cities4.slice(-3))
console.log(cities4.slice(1,5))
console.log(cities4.slice(-5,-1))
console.log(cities4.slice(-5,4))
console.log(cities4.slice(1,-1))
console.log(cities4.slice(-1,-4))


//           0        1       2           3        4        5
cities4 = ["pune","mumbai","banglore","kolkata","chennai","delhi"]

// cities4.pop()
// cities4.shift()
// cities4.splice(startIndex,numberOfElements)
// cities4.splice(startIndex,numberOfElements,rep1,rep2)

// cities4.splice(1,2)
// console.log(cities4)
//cities4.splice(1,1)
cities4.splice(2,2,"nagpur","goa")
console.log(cities4)

let info = ["chinmay","deshpande",12]
let y = info.join('-')
console.log(y)

//            0  1  2  3  4  5  6  7  8
let marksA = [11,22,33,44,55,66,77,88,99]
//let r4 = marksA.fill('@',1)
let r4 = marksA.fill('@',1,6)
console.log(r4)
