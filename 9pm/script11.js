
let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
console.log(numbers)

let arr1 = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el * 2
})
console.log(arr1)

// program 2
let birthYear = [1989,1990,1991,1992]
let arr2 = birthYear.map(function(el,index,arr){
    return 2025 - el
})
console.log(arr2)

// program 3

let marks = [44,55,66,77,22,33,44,66]
let arr3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(arr3)

// program 4
let numbersC  = [44,55,77,44,55,66,77,88]
let arr5 = numbersC.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(arr5)


// program 5

let numberS = [11,22,33]
let q4 = numberS.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

let transactions = [11,-11,22,-22]

let q33 = transactions.filter(function(el){
    return el > 0
}).reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q33)

let q44 = transactions.filter(function(el){
    return el < 0
}).reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q44)

// program 5


let arrE = [11,22,33,44,11]

// let q222 = arrE.filter(function(el){
//     return el > 30
// })
// console.log(q222)

let q333 = arrE.find(function(el,index,arr){
    return el > 30
})
console.log(q333)

let q3334 = arrE.findIndex(function(el,index,arr){
    return el > 30  // 30 se bade kitne elements hai, ye battat hai
})
console.log(q3334)



arrE = [11,22,33,44,11,101]

let g11 = arrE.every(function(el,index,arr){
    return el > 100
})
console.log(g11)


arrE = [11,22,33,44,11,101]
let q132 = arrE.some(function(el,index,arr){
    return el > 1000
})

console.log(q132)