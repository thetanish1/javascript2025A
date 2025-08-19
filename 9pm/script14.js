// // Object
let info = ["chinmay","deshpande",34,55]
// // retrive
// console.log(info[0])
// // add 
// info.push("pune")
// info.shift("Mr")
// // update 
// info[1] = "tanmay"
// // delete
// info.pop()
// info.shift()
// info.splice(1,1)
// // loop

// let color = ["red","blue","orange","green"]
// for(let i = 0 ; i < color.length ; i++){
//     console.log(color[i])
// }

// object 

let info2 = {
    // key:value
    // property:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:55
}


// retrive (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
// update (dot notation and bracket notation)
info2.firstName = "ram"
info2['lastName'] = "dani"
console.log(info2)
// add  (dot notation and bracket notation)
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)
// delete (dot notation and bracket notation)
delete info2.city
delete info2['language']
console.log(info2)
//console.log(info2[0])

// program 3

let vehicle = {
    color:"red",
    type:"sedane",
    logo:"BMW"
}
console.log(vehicle[0])
// dot notation will not work with loops
for(let x in vehicle){
    //console.log(x)
    console.log(vehicle[x])
}
