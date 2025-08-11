// let i=1

// while(i<=50){
//     if(i<=20){
//         console.log(i)
//         i+=1
//     }
//     else if (i<31){
//         i+=1
//         continue
//     }
//     else {
//         console.log(i)
//         i+=1
//     }
// }


// let i=1
// while(i<50){
//     if(i<10){
//         console.log(i)
//         i+=1
//         break
//     }
// }


// let t=1
// while(t<30){
//     if(t%2 ==0){
//         console.log(t)
//         t+=1
//         break
//     }
//     t+=1
// }

// let name= 'tanish'
// switch(name){
//     case 'pune':{
//         console.log(" I am not")
//         break
//     }
//     case 'tanish':{
//         console.log("I am Tanish Dewase")
//         break
//     }
// }

// let day='Tuesday'

// switch(day){
//     case 'monday':{
//         console.log(" Day is Monday")
//         break
//     }

//     case 'Tuesday':{
//         console.log(" This is tuesday")
//         break
//     }

//     case 'wednesday':{
//         console.log("This is Wednesday")
//         break
//     }
//     default:{
//         console.log(" invalid day")
//     }
// }


//  ternary operator

// let age=18
// let a=age >18 ? 'can vote' : "children"
// console.log(a)


// let n=100

// let w=n<=100 ? 'same' : 'not same'
// console.log(w)

// let t1=10
// let t2=20

// let p=t1>t2 ? 't1 is greater' : 't2 is greater'
// console.log(p)

//             //  0        1         2        3
// let names=['tanish','disha','rishika','virat']
// console.log(names[0])

// for (let i=0;i<names.length;i++){
//     console.log(names[i])
// }
// names[0]='vanshika'
// console.log(names)


            //  0        1         2        3
// let names=['tanish','disha','rishika','virat']
// console.log(typeof(names)) 

// names.push("radha")
// console.log(names)

// let p1=names.pop()
// console.log(p1)
// console.log(names)

// names.shift()
// console.log(names)

// names.unshift("tanish","dewase")
// console.log(names)

// let i2=names.slice(1,3)
// console.log(i2)

// let i3 = names.splice(1,3)
// console.log(i3)

// let num=[1,2,1,3,4,5,3,3443,8,2323,234234,2534534,3435434,4646]
// let o1=num.splice(0,4)
// console.log(o1)

// let o=num.slice(1,4)
// console.log(o)


let names=['tanish','disha','rishika','vanshika']
console.log(names.length)

names.push("Poorva")  // end
console.log(names)

names.unshift("dishu") //start
console.log(names)

names.pop()  //last dlt
console.log(names)

names.shift()  // first dlt
console.log(names)

names.sort()
console.log(names)

let q=names.at('tanish')
console.log(q)

