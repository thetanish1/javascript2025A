
let birthYear = [2000,2001,2002,2003]
let ages = []


for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    ages.push(2025 - birthYear[i])
}
console.log(ages)

birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(q1)

let arrT = [11,22,33]
let q2 = arrT.map(function(el,index,arr){
    return el + 10
})
console.log(q2)


// filter 
let e2 = [11,22,33,7]
let above10 = []
for(let i = 0 ; i < e2.length ; i++){
    if(e2[i] > 10){
       above10.push(e2[i]) 
    }
}
console.log(above10)
let e3 = e2.filter(function(el,index,arr){
    return el > 10
})
console.log(e3)