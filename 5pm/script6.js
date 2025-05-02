//              0          1       2   3
let info2 = ["chinmay","deshpande",23,44]

console.log(info2[0])
info2[0] = "tanmay"

// object 

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:44,
    age:34
}
// does object stores the value by index ?
console.log(info3[0])
// does object stores the duplicate value ?
console.log(info3)

// object

let info4 = {
    // key    :value 
    // property :value
    firstName :"sarika",
    lastName :"pansare",
    age:34,
    rollNo:45
}

// retrive (dot notation and bracket notation)
console.log(info4.firstName)
console.log(info4.lastName)
console.log(info4['age'])
// update (dot notation and bracket notation)
info4.age = 56
info4['age']= 45
// add (dot notation and bracket notation)
info4.city = "pune"
info4['language'] = "marathi"
console.log(info4)
// delete (dot notation and bracket notation)
delete info4.firstName
delete info4['lastName']
console.log(info4)

let numbers = [11,22,33,44]
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    console.log(numbers[i])
}

info4 = {
    // key    :value 
    // property :value
    firstName :"sarika",
    lastName :"pansare",
    age:34,
    rollNo:45
}

for(let prop in info4){
    console.log(prop,info4[prop])
}