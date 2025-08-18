
// number as a parameter and number as a return type 

function addA(x,y){
    return x + y
}
let q1 = addA(12,4)
console.log(q1)
// string as parameter and string as return 

function addC(word){
    return "hello "+ word
}
let q2 = addC("chinmay")
console.log(q2)

// boolean as a parameter and boolean as a return type 
function canDrive(age,haveVehicle){
    if(age >= 18 && haveVehicle){
        return true
    }
    else {
        return false
    }
}
let q3 = canDrive(18,false)
console.log(q3)

// array as parameter and array as return type 
let names = ["chinmay","sairka","shraddha","ram","ramesh"]
function addPlayer(arr){
    arr.push("sachin")
    return arr
}
let q4 = addPlayer(names)
console.log(q4)

// object as parameter and object return type 
// add city

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

function addCity(info){
    info['city'] =  "pune"
    info.language = "marathi"
    return info
}
let q5 = addCity(info)
console.log(q5)


// set as parameter and set as return type
let setA = new Set([11,22,33])
console.log(setA)

function addV(setA){
    setA.add(111)
    return setA
}
let q6 = addV(setA)
console.log(q6)

// map as parameter and map as written 

let mapA = new Map([
    [1,"admin"],
    [2,'customer'],
    [3,'manager']
])

function addRole(mapA){
    mapA.set(4,'support')
    return mapA
}
let q55 = addRole(mapA)
console.log(q55)


// function as parameter 

// function as return type 

// different ways of writing function