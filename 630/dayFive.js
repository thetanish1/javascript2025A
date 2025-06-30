// day 5 
// continue statemenet with for loop 
//for loop
for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 0 // 1 // 2 // 4 // 5
}

// program 1
// while loop 

// intialization 
//while(condition){
    // statement
    // increment/decrement
//}


// program 1
// print 1 to 3

let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 = i1 + 1 // 2 // 3 // 4
}

// program 2
// print 1 to 5
let i2 = 1
while(i2 <= 5){
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2 = i2 + 1 // 2 // 3 // 4 // 5 // 6
}

// program 3
// print hello 3 times 
let i3 = 1
while(i3 <= 3){
    console.log("hello")
    i3 = i3 + 1
}

// program 4
// print 5 to 1 in reverse 
let i4 = 5
while(i4 >= 1){
    console.log(i4) // 5 // 4 // 3 // 2 // 1
    i4 = i4 - 1 // 4 // 3 // 2 // 1 // 0
}

// program 5
// table of 2 
let i5 = 1 
while(i5 <= 10){
    console.log(i5 * 2)
    i5 = i5 + 1
}

let i6 = 2
while(i6 <= 20){
    console.log(i6)
    i6 = i6 + 2
}

// program 6
let i7 = 50 
while(i7 >= 5){
    console.log(i7) // 50 // 45 ------------------------5
    i7 = i7 - 5 // 45 // 40 -------------------------> 0
}

// break statement with while loop 

let i8 = 1 
while(i8 <= 5){
    console.log(i8) //1 // 2 // 3
    if(i8 == 3){
        break
    }
    i8 = i8 + 1 // 2 // 3
}

let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        break
    }
    console.log(i9) // 1 // 2
    i9 = i9 + 1 // 2 // 3
}

let i10 = 10
while(i10 >= 1){
    if(i10 == 5){
        break
    }
    console.log(i10)
    i10 = i10 -1
}

// program 7

let i11 = 1
while(i11 <= 5){
    if(i11 == 3){
        i11 = i11 + 1 // 4
        continue 
    }
    console.log(i11)  // 1 //2 // 4 //5
    i11 = i11 + 1  // 2 // 3 // 5 // 6
}

// Array



