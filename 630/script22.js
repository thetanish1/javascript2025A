
// javascript

// function declaration 
function additionA(x,y){
    console.log(x+y)
    return x + y
}
let q1 = additionA(12,3)
console.log(q1)


// function expression 
let additionB = function(x,y){
    console.log(x+y)
    return x + y
}
let q2  = additionB(12,3)
console.log(q2)

// arrow function 
let addtionC = (x,y)=>{
    return x + y
}
let q5 = addtionC(12,3)
console.log(q5)



// function expression
let addA = function(x,y){
    return x + y
}
let q6 = addA(12,4)

// let addC = (x,y)=> {
//     return x + y
// } 
// let q7 = addC(12,4)
// console.log(q7)
// arrow function with only one statement

let addC = (x,y)=>  x + y
let q7 = addC(12,4)
console.log(q7)

// arrow function with only 1 parameter
let addD = x => x + x
let q8 = addD(1)
console.log(q8)


// let x = 10
// console.log(x)

// let  y = function(x,y){
//     return x + y
// }
// console.log(y)
// y(12,3)


// function as a prameter to another function
let sub = (x,y) => x - y
function subtraction(fn,x,y){

    // let fn = (x,y) => x - y
    // let x = 10
    // let y = 5

    let w = fn(x,y) // 5
    return w
}
let Wsr = subtraction(sub,10,5)
console.log(Wsr) // 5


// function as a return type 


function add(){
    return function(){
        console.log("hello")
    }
}
let q = add()
console.log(q)