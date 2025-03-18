
let info = {
    firstName:'chinmay',
    lastName:'deshpande',
    age:12,
    rollNo:34
}
console.log(info)
// Map ---> 
// key:value
// Map key can be any datatype

let mapA = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"support"],
    [true,"candrive"],
    [["python","js"],"skills"],
    [{first:undefined,lastName:undefined},"chinmay deshpande"]

])
console.log(mapA)

// program 2
// two ways to define a map

let mapB = new Map([
    [1,"admin"],
    [2,"support"],
    [3,"customer"]
])
console.log(mapB)

let mapC = new Map()
console.log(mapC)
mapC.set(1,"admin")
mapC.set(2,"support")
mapC.set(1,"customer")
console.log(mapC)

// program 3
let mapD = new Map([
    [1,"admin"],
    [2,"support"],
    [3,"customer"]
])

console.log(mapB.size)
// particular key exist
let q1 = mapD.has(1)
let q2 = mapD.has(6)
console.log(q1)
console.log(q2)

// mapD.clear()
// console.log(mapD)
let a = mapD.get(1)
console.log(a)


mapD.forEach(function(val,key){
    console.log(val,key)
})

for(let x of mapD.keys()){
    console.log(x)
}

for(let x of mapD.values()){
    console.log(x)
}

for(let [x,y] of mapD.entries()){
    console.log(x,y)
}

mapD.delete(2)
console.log(mapD)
//String , array , object , userDefined (new),Map