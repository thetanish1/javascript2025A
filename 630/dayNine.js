let fn = 'chinmay'
console.log(fn)
console.log(typeof fn)

let ln = "deshpande"
console.log(ln)
console.log(typeof ln)

let mn = `shirish`
console.log(mn)
console.log(typeof mn)

// Object 
// String object 


// program 2
// number + number  --------> number 
// string + number  --------> string 
// number + string  --------> string 
// string + string  --------> string

let a  = 10
let b = 20 
let c = "hello"

console.log(c+b+a)
// string + number + number
    //hello + 10 + 20
        //hello10 + 20
            // hello1020

console.log(a+c+b)
// number + string + number 
    //  10  + hello + 20
        // 10hello + 20
            // 10hello20

console.log(a+b+c)
// number + number + string
    // 10 + 20 + hello 
       // 30 + hello 
            // 30hello

// string concat 
let firstName = "chinmay"
let lastName = "deshpande"

// My firstName is chinmay and My lastName is deshpande
console.log("My firstname is "+firstName+"and My lastName is "+lastName)
// string interpolation
console.log(`My firstName is ${firstName} and My lastName is ${lastName}`)

// program 3
let city = "pune"
console.log(city[0])
city[0] = "c"
console.log(city)

// Everthing in js is object 
// Object has properties and methods

let city3 = "nagpur"
console.log(city3.length)

// for loop 

for(let i = 0 ; i < city3.length ; i++){
    //console.log(i)
    console.log(city3[i])
}

// while
let i2 = 0 
while(i2 < city3.length){
    //console.log(i2)
    console.log(city3[i2])
    i2 = i2  + 1
}
// methods of string






