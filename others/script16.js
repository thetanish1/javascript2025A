// let obj = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     1:"admin"
// }
// console.log(obj)

// let mapA = new Map(
//     [
//         [1,"admin"],
//         [[11,22,33],"marks"],
//         [{fn:"Chinmay",ln:"Deshpande"},"info"]
//     ]
// )
// console.log(mapA)

// // program 2

// let mapB = new Map()
// mapB.set(1,"admin")
// mapB.set(2,"customer")
// mapB.set(3,"support")
// console.log(mapB)

// // size
// let q1 = mapB.size
// console.log(q1)

// let q2 = mapB.has(5)
// console.log(q2)

// mapB.delete(1)
// console.log(mapB)

// // mapB.clear()
// // console.log(mapB)

// e = mapB.get(2)
// console.log(e)

// mapB.forEach(function(v,k){
//     console.log(v,k)
// })

// for(let key of mapB.keys()){
//     console.log(key)
// }
// for(let val of mapB.values()){
//     console.log(val)
// }
// for(let [k,v] of mapB.entries()){
//     console.log(k,v)
// }

// set

// let setA = new Set([11,22,33,11,44])
// console.log(setA)

// let setB = new Set()
// console.log(setB)
// setB.add(55)
// setB.add(66)
// setB.add(77)
// setB.add(88)
// setB.add(99)
// console.log(setB)
// console.log(setB.size)

// //has
// e = setB.has(99)
// console.log(e)

// // setB.clear()
// // console.log(setB)

// setB.delete(99)
// console.log(setB)


// setB.forEach(function(v){
//     console.log(v)
// })


let setC = new Set(
    new Map([[1,'admin'],[2,'support']]),
    new Map([[3,'admin2'],[4,'support2']]),
    new Map([[5,'admin3'],[6,'support3']])

)

// for(let k of setC.values()){
//     console.log(k)
// }

// for(let k of setC.values()){
//     console.log(k)
// }

