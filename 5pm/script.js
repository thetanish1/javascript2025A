
// let and const 

// let  a = 10 
// console.log(a)
// a = 400
// console.log(a)


// const h = 100
// console.log(h)
// h = 4000


// Arithmetic operation 


let a = 10
let b = 5


console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let c = 9
let d = 3

console.log(c + d)
console.log(c - d)
console.log(c * d)
console.log(c / d)
console.log(c % d)

function Cal(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Cal(23, 4)
Cal(23, 4)

function addA() {
    console.log(9 + 9)
}
addA()
addA()
addA()

function addB(x, y) {
    console.log(x + y)
}
addB(12, 3)
addB(12, 3)

function addC(x, y) {
    return x + y
}
let d1 = addC()
console.log(d1)

// types 

let a1 = 10
console.log(a1)
console.log(typeof a1)
// number 10 ,-10 ,10.5

let b1 = true
console.log(b1)
console.log(typeof b1)
// boolean - true or false


let c1 = "chinmay"
console.log(c1)
console.log(typeof c1)
// ' ','a',"231dad","asd124"


// comaparison operator 


// < , > , <= >= 
// != , ==     ------value
// === , !==   -----> type 


console.log(2 === 2) // true
console.log(2 !== 2) // false
console.log(2 !== '2') // true
console.log(2 != '2') //false
console.log(2 != 2) // false
console.log(3 > 2) // true
console.log(3 < 2) // false
console.log(3 >= 3) // true
console.log(3 <= 3) // true
console.log(3 >= 2) // true
console.log(3 <= 2) // false



// logical operator

// && 

// true      &&      true   ----> true
// true      &&      false   ----> false
// false      &&      true   ----> false
// false      &&      false   ----> false

console.log(2 == 2 && 3 == 3)
console.log(2 != 2 && 3 == 3)
console.log(2 == 2 && 3 != 3)
console.log(2 != 2 && 3 != 3)



// ||

// true      ||     true   ----> true
// true      ||      false   ----> true
// false     ||      true   ----> true
// false     ||      false   ----> false


console.log(2 == 2 || 3 == 3)
console.log(2 != 2 || 3 == 3)
console.log(2 == 2 || 3 != 3)
console.log(2 != 2 || 3 != 3)



// !
// !true == > false
// !false ==> true
console.log(!(2 > 1))
console.log(!(2 < 1))

// conditional statements 



let numT = 5

if (numT > 0 && numT <= 5) {
    console.log("5T discount")
}

if (numT > 5 && numT <= 10) {
    console.log("10%  discount")
}
if (numT > 10) {
    console.log("30% discount")
}

// program 2

if (numT > 0 && numT <= 5) {
    console.log("5T discount")
}

else if (numT > 5 && numT <= 10) {
    console.log("10%  discount")
}
else if (numT > 10) {
    console.log("30% discount")
}
else {
    console.log("incorrect block")
}

// program 3

let marks = 92

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade A")
// }


if (marks > 90) {
    console.log("Grade A")
}
else if (marks >= 75) {
    console.log("Grade B")
}
else if (marks >= 65) {
    console.log("Grade A")
}
else {
    console.log("please try again ....")
}


let s = 10
let t = 5

if (s > t) {
    console.log("s is greater")
}
else {
    console.log("t is greater")
}

s > t ? console.log("s is greater") : console.log("t is greater")

let age = 18
let q1 = age >= 18 ? "can driver" : "cannot drive"


let city = "pune"
// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     default:
//         console.log("incorrect city")

// }


// switch (city) {
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     default:
//         console.log("incorrect city")

// }


// switch (city) {
//         case "pune":
//         case "nagpur":
//             console.log("MH")
//             break
//         case "bhopal":
//         case "indore":
//             console.log("MP")
//             break
//         default:
//             console.log("incorrect city")
    
//     }


let x1 = 10 
let x2 = 5
let x3 = 1
let biggest = true 


switch(biggest){
    case x1 > x2 && x1 > x3:
        console.log('x1 is greater')
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}


if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}

else if(x2 > x3 && x2 > x1){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}