// for(intilialization; conditionCheck , increment/decrement){
//     // statements
// }

for(let i = 1 ; i <= 5 ; i++){ // 2 //3
    if(i == 3){
        break
    }
    console.log(i)  //1 //2
}

for(let i = 1 ; i <= 5 ;i++){ // 2 // 3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break
    }
}
// continue statement with for loop
for(let i = 1 ; i <= 3 ; i++){ //2 // 3 // 4
    if(i == 2){
        continue
    }
    console.log(i) // 1 // 3
}

// while loop

// intialization
// while(condition){
    //statements
    //increment/decrement
//}

let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 = i1 + 1 // 2 // 3 // 4
}

// program 2
let i2 = 1
while(i2 <= 5){
    console.log(i2) //1 // 2 // 3 // 4 // 5
    i2 = i2 + 1 // 2 // 3 // 4 // 5 //6
}

// program 3
// hello
let i3 = 1
while(i3 <= 3){
    console.log("hello")
    i3 = i3 + 1
}

// program 5
// print 5 to 1 in reverse
let i4 = 5
while(i4 >= 1){
    console.log(i4) // 5 // 4 // 3 // 2 // 1
    i4 = i4 - 1 // 4 // 3 // 2 // 1 // 0
}

// program 6

i5 = 2
while(i5 <= 20){
    console.log(i5)
    i5 = i5 + 2
}

let i6 = 1
while(i6 <= 10){
    console.log(i6 * 2)
    i6 = i6 + 1
}

let i7 = 30
while(i7 >= 3){
    console.log(i7) // 30 // 27 -------- 3
    i7 = i7 -3 // 27 // 24 ------- 0
}

let i8 = 50
while(i8 >= 5){
    console.log(i8)
    i8 = i8 - 5
}