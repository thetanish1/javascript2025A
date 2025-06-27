// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for(let i = 0 ; i <= 100 ; i++){
//     console.log(i)
// }

// let i1 = 0 
// while(i1 <= 100){
//     console.log(i1)
//     i1 = i1 + 1
// }

// program 1
// for - for definite number of times
// while - for certain condition to meet 

// for(intialization;conditionCheck,increment/decrement){
//     // statement
//     // statament2
// }

// program -1 
// print 1 to 3

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i)  // 1 // 2 // 3
}

// 1 <= 3 ---> true 
// 2 <= 3 ---> true
// 3 <= 3 ---> true
// 4 <= 3 ----> false

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log("hello")  // "hello" // "hello" // "hello"
}

// program 3
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// program 4 
// print 5 to 1

for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 5
// table of 2
for (let i = 1; i <= 10; i++) {
    console.log(i * 2)
}

for (let i = 2; i <= 20; i = i + 2) { // 4 // 6 // 8 ------> 22
    console.log(i) // 2 // 4 // 6 ------------> 20
}

// program 6
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i)
}

// program 7 
// table of 3 in reverse
for (let i = 30; i >= 3; i = i - 3) {
    console.log(i)
}

// program 8 
// break statement in for loop 

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) //1 // 2 // 3
    if(i == 3){
        break
    }
}


for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1 // 2
}

for(let i = 10 ; i >= 1 ; i--){ // 9 // 8 // 7
    if(i == 7){
        break
    }
    console.log(i) // 10 // 9 // 8
}