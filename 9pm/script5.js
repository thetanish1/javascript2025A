


// one input and multiple outcomes

// program 1
// switch case without break statement
let city = "Kanpur"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    default:
        console.log('Incorrect city name')
}

// switch case with break statement 
let city2 = "kanpur"
switch(city2){
    case "pune":
        console.log("MH")
        break 
    case "udaipur":
        console.log("RJ")
        break
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city name ...")
}

// switch case for multiple case 

let city3 = "udaipur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("incorrect city name")
}

// switchcase example for boolean

let x1 = 10
let x2 = 50
let x3 = 300
let flag = true

switch(flag){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}










// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if(x2 > x1 && x2 > x3){
//     console.log('x2 is greater')
// }
// else {
//     console.log("x3 is greater")
// }