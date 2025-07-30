// number , boolean , string , array , object 
// userDefined , map , set 

// program 1
let  setA = new Set()
console.log(setA)
setA.add(11)
setA.add(12)
setA.add(13)
setA.add(14)
setA.add(11)
console.log(setA)

// program 2
// how to define set with values 
let setB =  new Set([11,44,55,66,66,77,88])
console.log(setB)

// program 3
// check whether set stores the value by index ?
//console.log(setB[0])
setB.add(99)
console.log(setB)

//setB.clear()
//console.log(setB)


// to check whether a particular value exist in set ?
let e = setB.has(22)
console.log(e)

let e2 = setB.has(99)
console.log(e2)
console.log(setB.size)

setB.delete(99)
console.log(setB)

setB.forEach(function(el){
    console.log(el)
})


for(let key of setB.keys()){
    console.log(key)
}

for(let val of setB.values()){
    console.log(val)
}

let setC = new Set()
setC.add({fn:"chinmay",ln:"deshpande"})
setC.add({fn:"sarika",ln:"pansare"})
console.log(setC)


// for(let key of setC.keys()){
//     console.log(key)
// }

// for(let val of setC.values()){
//     console.log(val)
// }

// for(let k of setC.entries()){
//     console.log(k)
// }




// let d = [11,22,33,44]
// d.length

//Human
//Properties - name , age , gender , color ,eyes
//Methods -walk() , talk()

// Vehicle 
// Properties - color , type , logo , companyName
// Methods - start() , stops()

// Bank acc
// Properties - bal , acctype , accName , IFSC code
// Methods - withdrawl() , deposit()
