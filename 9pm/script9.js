
// push()  pop() shift() unshift() includes()
//map() , filter(), reduce(), forEach(), findIndex(),find(),every()
// some()

let names = ["chinmay","sarika","shraddha","ram"]
let q1 = names.push("shivani")
console.log(names)
console.log(q1)


names = ["chinmay","sarika","shraddha","ram"]
let q2 = names.unshift("poorva")
console.log(q2)
console.log(names)

let q3 = names.pop()
console.log(q3)
console.log(names)

// [ 'poorva', 'chinmay', 'sarika', 'shraddha' ]

let q4 = names.shift()
console.log(q4)
console.log(names)

// [ 'chinmay', 'sarika', 'shraddha' ]
let q5 = names.includes("chinmay")
console.log(q5)


// program 1
//                 0   1     2    3
let birthYear = [2000,2001,2002,2003]
// [25,24,23,22]
let ages = []

for(let i = 0 ; i < birthYear.length ;i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    let x = 2025 - birthYear[i]
    ages.push(x)
}
console.log(ages)


// program 2

let marks = [20,33,44,31,12,55]
let above30 = []
// [33,44,31,55]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    if(marks[i] > 30){
        //console.log(marks[i])
        above30.push(marks[i])
    }
}
console.log(above30)

// program 3 
let nums = [11,22,33]
let total  = 0
for(let i = 0 ; i < nums.length ; i++){
    //console.log(i)
    //console.log(nums[i])
    total = total + nums[i]
    //       0    +    11   -----> 11
    //       11   +    22   -----> 33
    //       33   +    33   -----> 66
}
console.log(total)

// program 4

let cities = ["pune","mumbai","nagpur"]

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    //console.log(cities[i])
    console.log("welcome "+cities[i])
}

