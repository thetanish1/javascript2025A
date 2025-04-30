let birthYear2 = [2000, 2001, 2002, 2003]
let ages2 = []
for (let i = 0; i < birthYear2.length; i++) {
    //console.log(i)
    //console.log(birthYear2[i])
    //console.log(2025 - birthYear2[i])
    let ag = 2025 - birthYear2[i]
    ages2.push(ag)
}
console.log(ages2)

//              0   1    2    3
birthYear2 = [2000, 2001, 2002, 2003]

let q1 = birthYear2.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(q1)

let numbersA = [11, 22, 33, 44]
//[21,32,43,54]
let q2 = numbersA.map(function (el, index, arr) {
    return el + 10
})
console.log(q2)


// program 2
let marks = [67, 77, 78, 89, 34, 55, 65]
let above70 = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 70) {
        above70.push(marks[i])
    }
}
console.log(above70)
let q3 = marks.filter(function (el, index, arr) {
    return el > 70
})
console.log(q3)

// program 3

let num = [11, 22, 33]
let total = 0

for (let i = 0; i < num.length; i++) {
    total = total + num[i]
    //        0   +    11   // 11
    //        11   +   22   // 33
    //         33   +   33   // 66
}
console.log(total)
// let q4 = num.reduce(function(acc,el,index,arr){
//     return acc + el //66
// },0)
// console.log(q4)
// num.map(fn)
// num.map(fn)
let q4 = num.reduce(function (acc, el, index, arr) {
    return acc + el // 66
}, 0)
console.log(q4)

// program 4
let cities = ["pune", "mumbai", "banglore", "kolkata"]
for (let i = 0; i < cities.length; i++) {
    console.log("welcome " + cities[i])
}
cities.forEach(function (el, index, arr) {
    console.log("welcome " + el)
})