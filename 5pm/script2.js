// program 1
//               0         1      2
let names = ["chinmay","sarika","poorva"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

// program 2
let info = ["chinmay","deshpande",7709192441,true]
console.log(info)
console.log(info[1])


// program 3
//             0          1      2        3
let fruits = ["apple","mango","banana","orange"]
console.log(fruits)
fruits[0] = "chikoo"
console.log(fruits)

// length
console.log(fruits.length)
console.log(fruits[fruits.length-1])
// fruits.length - 1 is always the lastIndex

// program 4
// loop through the array 
//                   0          1         2          3
let vegetables = ["cabbage","carrot","capscicum","brinjal"]
for(let i = 0 ; i < vegetables.length ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(vegetables[i])
}

let numbers = [1,22,333,4444]
for(let i = 0  ; i < 4 ; i++){
    //console.log(i)
    console.log(numbers[i])
}

// program 5
// Print the element in reverse 
//              0  1  2    3
let numbersB = [1,22,333,4444]
for(let  i = numbersB.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(numbersB[i])
}

// program 6

let numbersC = [222,333,444]
let i1 = 1
while(i1 < numbersC.length){
    //console.log(i1)
    console.log(numbersC[i1])
    i1 = i1 + 1
} 