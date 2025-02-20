// program 1
let birthYear = [1989,1990,1991,1992]
let ages = []
for(let i  = 0 ; i < birthYear.length ; i++){
    let x = 2025 - birthYear[i]
    ages.push(x)
}
console.log(ages)

let ages2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(ages2)

let na = [11,22,33,44,55,66]

// program 2

let marks = [11,22,33,44,55,22,33,24]
let above30 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 30){
        above30.push(marks[i])
    }
}
console.log(above30)
let above302 = marks.filter(function(el,index,arr){
    return el > 30
})
console.log(above302)
let transactions = [11,22,33,-40,45,66,7,-44]
// deposit()
// withdrawl()


// program 3
let numbers  = [11,22,33]
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    // console.log(i)
    // console.log(numbers[i])
    total = total + numbers[i]
}
console.log(total)

// reduce
let q2 = numbers.reduce(function(acc,el,index,arr){
    return acc + el // acc - 66
}, 0)
console.log(q2)

// program 4
let cities = ["pune","mumbai","wardha","nagpur"]

for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+ cities[i])
}
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5

// find 
let names = ["chinmay","mayuri","poorva","pooja","sham","ajay"]
let startP =names.filter(function(el,index,arr){
    return el[0] == "p"
})
console.log(startP)

let startPfirst =names.find(function(el,index,arr){
    return el[0] == "p"
})
console.log(startPfirst)


// findIndex
let startPfirstIndex =names.findIndex(function(el,index,arr){
    return el[0] == "p"
})
console.log(startPfirstIndex)


//  every
let nums = [11,22,3,4,5]

let p1 = nums.every(function(el,index,arr){
    return el > 10
})
console.log(p1)

let p2 = nums.some(function(el,index,arr){
    return el > 100
})
console.log(p2)

