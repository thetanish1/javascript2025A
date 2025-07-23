
// class Person {
//     fn = undefined
//     ln = undefined

//     displayName(){
//         console.log(this.fn + this.ln)
//     }
// }
// let personA = new Person()

// program 2
let pro = {
    firstName:'chinmay',
    lastName:'deshpande',
    age:23,
    1:23
}
console.log(pro)

// map 
//map will have properties and other than string 
// it can have array , object , number , boolean , objext , set as properties

// program 3
// how to define map ?

// with values 

let mapA = new Map(
    [
        [1,'admin'],
        [2,'manager'],
        [3,'customer'],
        [4,'tutor'],
        [true,'other']

    ]
)
console.log(mapA)
console.log(mapA.size)

// without values 
let mapB = new Map()
mapB.set([11,22,33],'marks')
mapB.set({fn:"chinmay",ln:"deshpande"},'info')
mapB.set(1,'admin')
mapB.set(1,'customer')
console.log(mapB)
// map  does not allows to store duplicate values
// particular key exist in map
// let rr = mapB.has(1)
// let rr2 = mapB.has(2)
// console.log(rr)
// console.log(rr2)

// program 4

let mapC = new Map(
    [
        [1,'admin'],
        [2,'manager'],
        [3,'customer'],
        [4,'tutor'],
        [true,'other']

    ]
)
//mapC.clear()
console.log(mapC)

mapC.delete(2)
console.log(mapC)

let r22 = mapC.get(3)
console.log(r22)

// el , index, arr

mapC.forEach(function(v,k){
    console.log(v,k)
})

for(let g of mapC.keys()){
    console.log(g)
}

for(let g of mapC.values()){
    console.log(g)
}


for(let [a1,a2] of mapC.entries()){
    console.log(a1,a2)
}
