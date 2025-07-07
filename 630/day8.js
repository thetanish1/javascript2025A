
//                0    1     2    3
let birthYear = [2000,2001,2002,2003]
let ages = [] //[25,24]
// [25,24,23,22]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    let ag = 2025 - birthYear[i]  // 25 // 24
    ages.push(ag)
}
console.log(ages)

// map function
//            0    1     2   3
birthYear = [2000,2001,2002,2003]
// parameters
// el
// i
// arr
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})

console.log(q1)
// map ==> array

// program 2
let arrs = [11,12,13,14]
// ["$11","$12","$13","$14"]
let q2 = arrs.map(function(el,index,arr){
    return `$`+el
})
console.log(q2)


// program 2
// filer

let marks = [77,56,74,66,78]
let above70 = [] // [77]
// [77,78]
for(let i = 0 ; i < marks.length ; i++){
   // console.log(i)
    console.log(marks[i])
    if(marks[i] > 70){
        above70.push(marks[i])
    }
}
console.log(above70)
let q4 = marks.filter(function(el,index,array){
    return el > 70
})
console.log(q4)


