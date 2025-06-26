// varaibles
// arithmetic 
// logical operator
// comparison operators 
// conditional statement 
// switch case 
// Tenary operator

let a = 10 
let b = 50
if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// condition ? statementOne:statementTwo
a > b ? console.log("a is greater"):console.log('b is greater')

// program 2 
let age = 18
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)

// program 3
// switchCase 
// one input and multiple outcomes 

// switch case without break statement 
let city = "Indore"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("incorrect city name ..")
}
let city2 = "indore"
switch(city2){
    case "mumbai":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name ...")
}

// multiple case and same outcome
let city3 = "mumbai"
switch(city3){

    case "pune":
    case "mumbai":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name ..")

}

let x1 = 1000
let x2 = 5000
let x3 = 20000
let biggest = true 

switch(biggest){
    case x1 > x2 && x1 > x3:
        console.log("x1 is biggest")
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
// else if(x2 > x1 && x2 > x3 ){
//     console.log("x2 is greater")
// }
// else {
//     console.log("x3 is greater")
// }










































