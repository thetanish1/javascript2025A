
let firstName  = "chinmay"
console.log(typeof firstName)

// number + number ----> number 
// number + string ----> string
// string + number ----> string 
// string + string ----> string


let a = 10
let b = 5
let c = "hello"

//console.log(a+c+b)

//console.log(c+b+a)
// string + number + number
    //'hello5' + 10
    // hello510

//console.log(a + b + c)
// number + number + string
    // number + string 
        // 15 + "hello"
        // string
            // 15hello


// program 2
// strimg immutable

let firstName2 = "chinmay"
firstName2 = "tanmay"

// string stores the value by index
console.log(firstName2[0])
firstName2[0] = "t"
console.log(firstName2)

let numbers = [11,22,33]
numbers[0] = 22
console.log(numbers)

// program 3

let word = "hello"

// 0   1   2   3   4
// h   e   l   l   o
console.log(word.length)
console.log(word.length - 1)

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(word[i])
}

word = "hello"
for(let i = word.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(word[i])
}

let i2 = 0
while(i2 < word.length){
    //console.log(i2)
    console.log(word[i2])
    i2 = i2 + 1
}


// Gym - method  
// action - excercise
// return - health

// action - convert every character to uppercase()
// return - string

let firstName1  = "Hello"
let q1 = firstName1.toUpperCase()
console.log(q1)


firstName2 = "Ninad"
let q2 = firstName2.toLowerCase()
console.log(q2)


let fruits = "apple banana grapes orange mango" 
let q3 = fruits.includes("apple ")
console.log(q3)
