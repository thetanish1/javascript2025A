
// conditional statments

// program 1

// one input and multiple outcomes

// numT > 0 && numT <= 5  - 10 % discount
// numT > 5 && numT <= 10 - 20 % discount
// numT > 10              - 30 % discount

// if(condition){ // boolean ---> true or false
    // statements 
//}

let numT = 17

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

// program 2

let numT2 = -17

if(numT2 > 0 && numT2 <= 5){
    console.log("10 % discount")
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("20 % discount")
}
else if(numT2 > 10){
    console.log("30 % discount")
}
else {
    console.log("please provide correct input")
}
// program 3

let marks = 56

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

// program 4

if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again ...")
}

// program 5
let g = 8
let h = 40

if(g > h){
    console.log("g is greater")
}
else {
    console.log("h is greater")
}

// program 6
let x1 = 10
let x2 = 5
let x3 = 1

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

// program 7
// tenary operator
// condition ? statement : statement
let a1 = 8
let a2 = 40
a1 > a2 ? console.log('a1 is greater'):console.log("a2 is greater")

// program 8

let age = 17
let a3 = age >= 18 ? "can drive":"cannot drive"
console.log(a3)