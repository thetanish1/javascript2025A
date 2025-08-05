// map() , filter() , reduce() , forEach()
// find(), findindex(), some() , every()
// Be here now ?
// GenAI tools 


let birthYear = [2000,2001,2002,2003]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    ages.push(2025 - birthYear[i])
}
console.log(ages)

birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - 2000
})
console.log(q1)

let numbers  = [11,22,33,44]

// [21,33,44,55]

let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)

// program 2

let marks = [88,33,44,55,66,77,22]
//[88,55,66,77]
let above50 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i]  > 50){
        above50.push(marks[i])
    }
} 
console.log(above50)

marks = [88,33,44,55,66,77,22]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

let transactions  = [34,55,-66,77,-88,44,-55]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// program 3


let numbersB = [11,22,33]
let total = 0

for(let i = 0 ; i < numbersB.length ; i++){
    total = total + numbers[i]
    //       0    +     11    -----> 11
    //       11   +     22    -----> 33
    //       33   +     33    -----> 66
}
console.log(total)

numbersB = [11,22,33]
let q4 = numbersB.reduce(function(acc,el,index,arr){
    return acc + el // acc - 66
},5)
console.log(q4)

let cities = ["pune","nagpur","mumbai"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome " + cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})