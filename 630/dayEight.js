//             fn        ln       ag  rn
let info = ["chinmay","deshpande",23,55]

// object 
let info2 = {
    //key:value
    //property:value
    fn:"chinmay",
    ln:"deshpande",
    ag:23,
    rn:55
}
console.log(info2)
// does object stores the value by index ?
//console.log(info2[0])
// number of key or property 

// operations
info3 = {
    //key:value
    //property:value
    fn:"chinmay",
    ln:"deshpande",
    ag:23,
    rn:55
}
// retrive (dot notation and bracket notation)
console.log(info3.fn)
console.log(info3['fn'])
// update (dot notation and bracket notation)
info3.fn = "ninad"
info3['fn'] = "samay"
// add (dot notation and bracket notation)
info3.ag = 99
info3.language = "marathi"
info3['city'] = "pune"
console.log(info3)
// delete (dot notation and bracket notation)
delete info3.city
delete info3['fn']
console.log(info3)

// program 3

let vehicle = {
    color:"red",
    type:"sedane",
    regNo:123,
    wheel:4
}

// loop
//       vr
// dot notation does not work inside loop
for(let key in vehicle){
    console.log(key,vehicle[key])
}

// program 3

let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        skills:["python","html","css","java"]
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:33,
        skills:["python","html","css","java","sql","api"]

    },
    {
        firstName:"sanjay",
        lastName:"dani",
        age:34,
        skills:["python","html","css"]

    }

]
console.log(students[2].firstName)
console.log(students[2]['firstName'])

// all firstName 

for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName)
}

students.forEach(function(el,index,arr){
    console.log(el.firstName)
})

// firstName:numberOfSkills
students.forEach(function(el,index,arr){
    console.log(el.firstName+":"+el.skills.length)
})
