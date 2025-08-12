
//              0      1          2         3
let cities = ["pune","mumbai","banglore","kolkata"]
// retrive 
console.log(cities[0])

// update 
cities[0] = "nagpur"
console.log(cities)

// add 
cities.push("wardha")
cities.unshift("goa")

// delete
cities.pop()
cities.shift()
cities.splice(2,1)

// Object 
//             fn         ln      ag rl
let info = ["chinmay","deshpande",23,44]

let info2 = {
    // key  : value 
    // property:value
    firsName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:36,
    age:42
}
console.log(info2)
console.log(info2[0])

info2 = {
    // key  : value 
    // property:value
    firsName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:36,
    age:42
}

// dot notation and bracket notation
// retrive
console.log(info2.firsName)
console.log(info2['firsName'])

// update (dot notation and bracket notation)
info2.firsName = "tanmay"
info2['lastName'] = "dani" 
console.log(info2)

// add 
info2.city = 'pune'
info2['language'] = "marathi" 
console.log(info2)

// delte
delete info2.firsName
delete info2['lastName']
console.log(info2)




