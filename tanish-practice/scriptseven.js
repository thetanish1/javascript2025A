// const num=[1,2,3,4,5,6]
// let a=num.filter(function(num){
//     return num % 2 ==0;
// })
// console.log(a)

// let t=num.reduce(function(acc,curr){
//     return acc+curr
// },0)
// console.log(t)

// console.log(tanish)
// var tanish='hello'
// console.log(tanish)

let a1=10
console.log(typeof(a1))

let a2="tanish"
console.log(typeof(a2))

let a3=false
console.log(typeof(a3))

let a4= ' '
console.log(typeof(a4))

let a5=[1,2,3,'tanish',false,'jhsgd'] //object
console.log(typeof(a5))

let a6=['s','r','df']
console.log(typeof(a6))

let a7=[1,2,3,4,5]
console.log(typeof(a7))
console.log(a7[1])
console.log(a7.length) // all elements
console.log(a7.length-1) // last element

let student=['tanish','disha','pranali','rishika']
// console.log(student)
// console.log(typeof(student))
// console.log(student.length)
// let name='tanish'
// for (let i=0;i<student.length;i++){ // all elements
//     console.log(student[i])
// }

// reverse elements

// for (let i=student.length;i>=0;i--){
//     console.log(student[i])
// }


// function addition(a,b){
//     console.log(a+b)
// }
// addition(10,4)

// let cities=['mumbai','delhi','nagpur','pune']
// cities.push('germany')
// console.log(cities)
// cities.unshift('london')
// console.log(cities)
// cities.pop()
// console.log(cities)
// cities.shift()
// console.log(cities)
// let a = cities.length
// console.log(a)
// let i=cities.includes('germany')
// console.log(i)
// let sp=cities.splice(1,3) // in saab ko chood ke
// console.log(cities)



// map(), filters(), reduce(), forEach(), findIndex(), fincd(), every(), some()

let birthyear=[2000,2001,2002,2003]
let ages=[]
for (let i=0;i<birthyear.length;i++){
    let a=2025 - birthyear[i]
    ages.push(a)
}
console.log(ages)

let marks=[20,23,24,28,75,24,90,60]
let above30=[]
for(let i=0;i<marks.length;i++){
    if (marks[i]>30){
        above30.push(marks[i])
    }
}
console.log(above30)


let nums=[23,43,11,54,45]
let total=0
for (let i=0;i<nums.length;i++){
    total=nums[i]+total
}
console.log(total)

// let cities=['nagpur','mumbai','delhi','germany']
// for (let i=0;i<cities.length;i++){
//     console.log("Welcome to ",cities[i])
// }

//  Map()

birthyear=[2000,2001,2002,2003,2004]
let t=birthyear.map(function(element,index,array){
    // console.log(element,index,array)
    return 2025 - element
})
console.log(t)

// Map()
// marks=[54,24,67,3,33,89,76]
// let f=marks.map(function(element,index,array){
//     return element+10
// })
// console.log(f)

// filters()
// let transactions=[12,-567,343,2323,5,4,6,-5765,44,-45645,-34]
// let positive=transactions.filter(function(element,index,array){
//     return element>0
// })
// console.log(positive)

// let negative=transactions.filter(function(element,index,array){
//     return element<0
// })
// console.log(negative)


// let numbers=[1,2,5454,344,6767,34,23,45,56]
// let ans=numbers.reduce(function(acc,element,index,array){
//     return element+ acc
// },0)
// console.log(ans)

// let cities=['nagpur','mumbai','delhi','germany']
// cities.forEach(function(element,index,array){
//     console.log('welcome to ',element)
// })



// let array1=[11,22,33,44,55,66]
// let a=array1.filter(function(element,index,array){
//     return element> 40
// }).reduce(function(acc,element,index,array){
//     return acc + element
// },0)
// console.log(a)

// let ans1=array1.find(function(element,index,array){
//     return element >30

// })
// console.log(ans1)

// let t1=array1.findIndex(function(element,index,array){
//     return element >60
// })
// console.log(t1)


let array1=[11,22,33,44,55,66]

// let r1=array1.every(function(element,index,array){
//     return element>10  // sabhi element ke liye condition true honga toh true otherwise false
// })
// console.log(r1)


// let ans1=array1.find(function(element,index,array){
//     return element >40

// })
// console.log(ans1)

// let r1=array1.some(function(element,index,array){
//     return element>10
// })
// console.log(r1)








