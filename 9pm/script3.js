let a = 10 
console.log(a)
console.log(typeof a)
// 10 , -10  , 0 , 10.5 , -12.4 , 0.34

let b = true
console.log(b)
console.log(typeof b)
// true or false

let c = "chinmay"
console.log(c)
console.log(typeof c)

// "c" , "C" , "1","23sfds"," ","234 543543asd$#$"
// comparison 
// entity < entity ---> boolean
// boolean - true or false

console.log(typeof 12) // number
console.log(typeof '12') // string 
// absolute value - 12

// < , > , <=,>= 
// == ,!=      ----> value
// === , !==   ----> value and type

console.log(3 === 3)
console.log(3 === '3')
console.log(3 !== '3')
console.log(3 !== 3)
console.log(2 == '2')
console.log(2 == 2)
console.log(2 != 2)
console.log(2 != '2')
console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 2)
console.log(3 <= 2)
console.log(3 >= 3)
console.log(3 <= 3)

// logical operator

// - && 

//  true      &&     true    ----> true
//  false     &&     true    ----> false
//  true      &&     false   ----> false
//  false     &&     false   ----> false

console.log(3 === 3 && 2 == 2)
console.log(3 === 1 && 2 == 2)
console.log(3 === 3 && 2 == 1)
console.log(3 === 4 && 2 == 1)


// - ||
//  true      ||     true    ----> true
//  false     ||     true    ----> true
//  true      ||     false   ----> true
//  false     ||     false   ----> false

console.log(3 === 3 || 2 == 2)
console.log(3 === 1 || 2 == 2)
console.log(3 === 3 || 2 == 1)
console.log(3 === 4 || 2 == 1)

//- !
// !true  ---> false
// !false ---> true

console.log(!(2 == 2))
console.log(!(2 == 3))
