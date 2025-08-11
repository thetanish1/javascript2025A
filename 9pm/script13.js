// flat 
//                   0                     1                   2         

const { version } = require("react")

//               0         1        0          1        0           1
let states = [["ujjain","indore"],["mumbai","nagpur"],["udaipur","jaipit"]]
console.log(states[0][1])
console.log(states[2][1])
let qwerty = states.flat()
console.log(qwerty)

//             0  1  2  3  4  5  6  7  8
let numbers = [11,22,33,44,55,66,77,88,99]
numbers.fill("-",3,7)
console.log(numbers)



// object 
//             0          1       2   3
let info = ["chinmay","deshpande",18,55]


let info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:55,
    rollNo:18
}
console.log(info2)
console.log(info2[0])


// program 3
// does object allows to store duplicate values
vehicle = {
    color:"blue",
    type:"sedane",
    company:"audi",
    color:"red"
}
console.log(vehicle)



vehicle = {
    color:"blue",
    type:"sedane",
    company:"audi",
}
// retrive  (dot notation and bracket notation)
console.log(vehicle.color)
console.log(vehicle['color'])
// update (dot notation and bracket notation)
vehicle.color = "red"
vehicle['color'] ="grey"
console.log(vehicle)
// add (dot notation and bracket notation)
vehicle['logo'] = "circular"
vehicle.wheel = 4
console.log(vehicle)
console.log(vehicle)

// delete (dot notation and bracket notation)
delete vehicle.color
delete vehicle['logo']
console.log(vehicle)
console.log(vehicle)

