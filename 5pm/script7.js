let info   = ["chinmay","deshpande",34,56]
console.log(info[0])
info[0] = "tanmay"

// create 
// retrive 
console.log(info[0])
// add 
info.push("pune")
info.unshift("Mr")
// update 
info[0] = "tanmay"
// delete 
info.pop()
info.shift()
info.splice(1,2)

// loop 
for(let i = 0 ; i < info.length ; i++){
    console.log(i)
    console.log(info[i])
}
// why object are required ?
//              fn         ln      
let info2  = ["tanmay","deshpande",45,56]

for(let i = 0 ; i < info2.length ; i++){
    console.log(i)
    console.log(info2[i])
}

let info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56,
    age:46
}

//retrive  (bracket notation and dot notation)
console.log(info4.firstName)
console.log(info4.lastName)
console.log(info4.rollNo)
console.log(info4.age)

console.log(info4['firstName'])
console.log(info4['lastname'])
console.log(info4['age'])
console.log(info4['rollNo'])

// update  (bracket notation and dot notation)
info4.firstName = "tanamay"
info4['firstName'] = "deshpande"
//add  (bracket notation and dot notation)
info4.city = "pune"
info4['language'] = "marathi" 
//delete the value  (bracket notation and dot notation)
delete info4['firstName']
delete info4.lastName

// loop

let vehicle = {
    //property:value
    // key:value
    color:'blue',
    type:"sedane",
    regNO:123
}

for(let key in vehicle){
    console.log(key,vehicle[key])
}

for(let key of Object.keys(vehicle)){
    console.log(key)
}
for(let key of Object.values(vehicle)){
    console.log(key)
}

let info5 = {
    firstName:"chinmay",
    lastName:"deshpande"
}
let q1 = info5.hasOwnProperty("city")
console.log(q1)

// mixed data type

let info3 = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"ninad",
        lastName:"dani"
    }
]
console.log(info3[0]['firstName'])

for(let i = 0 ; i < info3.length ; i++){
    console.log(info3[i]['firstName'])
    console.log(info3[i]['lastName'])
}