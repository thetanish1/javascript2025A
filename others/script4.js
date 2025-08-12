// program 1
let i1 = 0
while(i1 <= 5){
    if(i1 == 3){
        break
    }
    console.log(i1) // 0 // 1 //2
    i1 = i1 + 1  // 1 // 2 //3
}

// program 2

let i2 = 0
while(i2 <= 5){
    console.log(i2) // 0 //1 //2 //3
    if(i2 == 3){
        break
    }
    i2 = i2 + 1 // 1 // 2 //3
}

// program 3
let i3 = 0
while(i3 <= 5){
    if(i3 == 2){
        i3 = i3 + 1 //3
        continue
    }
    console.log(i3) // 0 // 1 //3 //4 // 5
    i3 = i3 + 1 // 1 // 2 // 4 //5 // 6
}

