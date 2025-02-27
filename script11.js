// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23
// }
// console.log(info)
// // dot notation will not work inside the object

// for(let key in info){
//     console.log(key,info[key])
// }


let fn = "chinmay"
let ln = 'deshpande'
let mn = `shirish`

console.log(typeof fn)
console.log(typeof ln)
console.log(typeof mn)


// program 2

//my firstName is chinmay and lastName is deshpande
let fn1 = "chinmay"
let fn2 = "deshpande"

console.log("My firstName is "+fn1+" and my lastName is "+fn2)
console.log(`My firstName is ${fn1} and my lastName is ${fn2}`)

// program 3

// string + string -----> string 
// number + string -----> string 
// string + number -----> string 
// number + number -----> number
let a = 10
let b  = 5 
let c = "hello"

console.log(a + b + c)
//      number + number + string
             //15 + "hello"   ---> 15hello


console.log(c + b + a)
// string + number + number 
        // string + number 
            // string

console.log(a + c + b)

// program 3
// String store the value by index ??

let city2 = "pune"
console.log(city2[0])
for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

let q1 = 0 
while(q1 < city2.length){
    console.log(city2[q1])
    q1 = q1 + 1
}

city2 = "pune"
city2[0] = "r"
console.log(city2)