// short circuit 

//||

//    true     or      true    ===> true
//    false    or      true    ===> true 
//    true     or      false   ===> true 
//    false    or      false   ===> false 


//falsy  - 0  , undefined , NaN , null , 4 > 5 , false
//truthy - "a", true , [] , {} , 7 > 4, true

if(0){
    console.log("hello")
}
else {
    console.log("Bye")
}

// short circuit - ||
let q1 = "" || "chinmay"
let q2 = 6>3 || "ram"
let q3 = 6<3 || 3 < 1
let q4 = 0 || 0 == 0
let q5 = true || 0 == 0

console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)
console.log(q5)

// short circuit  - &&
let a1 = 0 && "hello"
let a2 = " " && "hello"
let a3 = 6 == 6 && 6 > 7
console.log(a1)
console.log(a2)
console.log(a3)

// Nullish coalescing operator 
// null or undefined
let score = 0 
let b ;
let a4 = null ?? 100
let a5 = b ?? 100
console.log(a4)
console.log(a5)

// optional parameter
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
console.log(info?.arent.mother)