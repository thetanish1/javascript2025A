// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     age: 24,
//     1: '34'

// }

// // The property of object is always the string
// console.log(info)

// // Map data 
// // object key can be of any time 


// // how to define map ??

// let mapA = new Map([
//       [1,"admin"],
//       [2,"manager"],
//       [3,"customer"],
//       [true,"anyValue"]
//     ]
// )
// console.log(mapA)

// let mapB = new Map([
//     [1,"A1"],
//     [2,"A2"],
//     [3,"A3"]
// ])


// // how map is different from object ??
// // object and map both stores the value in key value pair only
// // object property will be string only but key will be any data type

// // properties and methods of map

// let mapC = new Map()
// console.log(mapC)
// console.log(mapC.size)
// console.log(mapB.size)

// // set 

// mapC.set([11,22,33],"marks")
// console.log(mapC)
// mapC.set(2,"admin")
// console.log(mapC)

// // update
// mapC.set(2,"customer")
// console.log(mapC)

// // clear()
// mapC.clear()
// console.log(mapC)
// // data type won't be deleted

// // program 3

// let mapE = new Map(
//     [
//         [1,"admin"],
//         [2,"manager"],
//         [3,"customer"],
//         [4,"supervisor"]
//     ]
// )

// let q1 = mapE.has(7888)
// console.log(q1)

// mapE.delete(3)
// console.log(mapE)

// let q3 = mapE.get(2)
// console.log(q3)

// mapE.forEach(function(v,k){
//    // console.log(v)
//    console.log(k)
// })

// for(let key of mapE.keys()){
//     console.log(key)
// }

// for(let val of mapE.values()){
//     console.log(val)
// }

// for(let [k,v] of mapE.entries()){
//     console.log(k)
//     console.log(v)
// }

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    1:"new rule"
}
console.log(info)

let mapA = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"]
])
console.log(mapA)

let mapB = new Map()
console.log(mapB)
console.log(mapB.size)
mapB.set(1,"chinmay")
mapB.set(2,"sarika")
mapB.set(3,"poorva")
mapB.set(4,"shraddha")
console.log(mapB)
console.log(mapB.size)

console.log(mapB.has(1))
console.log(mapB.get(1))

//mapB.clear()
//console.log(mapB)

mapB.delete(2)
console.log(mapB)

mapB.forEach(function(vl,key){
    console.log(vl)
    console.log(key)
})

for (let key of mapB.keys()){
    console.log(key)
}

for (let val of mapB.values()){
    console.log(val)
}

for (let [k,v] of mapB.entries()){
    console.log(k,v)
}