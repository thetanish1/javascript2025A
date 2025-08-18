// Map() : perform operations on every elements
// let name=['tanish','aavir','lavir','aadvik']
// name.map(function(element,index,array){
//     console.log(element)
// })

// let number=[1,2,3,4,5,6,7,8,9,10]
// let ans=number.map(function(element,index,array){
//     if (element%2==0){
//         console.log(element)
//     }
// })

// number.map(function(element,index,array){
//     console.log(number[index])
// })

// let table2=number.map(function(element,index,array){
//     return element*2
// })
// console.log(table2)


// filters()
// : return those element which satisfy condition

// let a1=[1,2,3,4,5,6,7]
// let a=a1.filter(function(element,index,array){
//     return element%2==1
// })
// console.log(a)

// let a2=a1.filter(function(element,index,array){
//     return element%2==0
// })
// console.log(a2)

// reduce() has acc,element,index,array
// return array in single value 

let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let sum=number.reduce(function(acc,element,index,array){
//     return acc+element
// },0)
// console.log(sum)

// let skip=number.reduce(function(acc,element,index,array){
//     if (acc==number){
//         console.log(element)
        
//     }
// },1)
// console.log("skip",skip)

let name=['a','b','c','d','e','f']
let a=name.reduce(function(acc,element,index,array){
    return element == 'a','b','c','d' ? 'abcd' : 'ef'
})
console.log(a)




















