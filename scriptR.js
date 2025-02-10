let city = "indore"
switch (city) {
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "indore":
        console.log("MP")
    default:
        console.log("incorrect city")
}

let city2 = "indore"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "indore":
        console.log("MP")
        break
    default:
        console.log("incorrect city")
}

let city3 = "indore"
switch (city3) {
    case "pune":
    case "mumbai":
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
        console.log("incorrect city")
}

let x1 = 10
let x2 = 5
let x3 = 2
let biggest = true

switch(biggest){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}