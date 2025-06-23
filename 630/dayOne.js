



let a = 10
console.log(a)
a = 1000
console.log(a)

let x = 10
console.log(x)
y = x

y = 900

console.log(x)
console.log(y)


// program2 

let names = ["chinmay","sarika","poorva","samay"]
console.log(names)

let names2 = names
names2[0] = "samay"
console.log(names)
console.log(names2)

// program 3
//           0        1         2      3
let city = ["pune","mumbai","nagpur",'mumbai']
// does array stores the value by index ?
console.log(city[0])

// total number of elements in array 
// length 
// type --- properties and methods 
console.log(city.length)


// program 4
//              0        1        2       3
let fruits = ["apple","banana","grapes","chikoo"]
console.log(fruits[0])
console.log(fruits.length)
console.log(fruits[3])
// length -1 is always last index

console.log(fruits[0])

//update
fruits[0] = "papaya"
console.log(fruits)

// loop 
//                 0         1         2     3
let countries = ["india","srilanka","cuba","china"]
console.log(countries)

for(let i = 0 ;  i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 , 1 // 2 // 3
    console.log(countries[i])
}


// let numbersA  = [11,22,33]
// for(let i = 0 ; i < numbersA.length ; i++){
//     console.log(i)
//     console.log(numbersA[i])
// }

//             0        1        2
let veg  = ["potato","tomato","brinjal"]

for(let i = 0 ; i < veg.length ; i++){
    //console.log(i)
    console.log(veg[i])
}

let i4 = 0
while(i4 < veg.length){
   // console.log(i4)
    console.group(veg[i4])
    i4 = i4 + 1
}