// // program 1

// let names = ["mansi","mayuri","sarika"]
// let [n1,n2,n3] = names
// console.log(n1)
// console.log(n2)
// console.log(n3)

// // program 2
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

// // program 3

// let state = [["pune","nagpur"],["bhopal","indore"]]
// let [[c1,c2],[c3,c4]] = state
// console.log(c1)
// console.log(c4)

// // program 4

// let info2 = {
//     one:{
//         fn:"amit",
//         ln:"bhure"
//     },
//     two:{
//         fn:"sayli",
//         ln:"jogi"
//     }
// }

// let {one:{fn:f1,ln:l1},two:{fn:f2,ln:l2}} = info2
// console.log(f1)
// console.log(f2)
// let students = [
//     {
//         fn:"chinmay",
//         ln:"deshpande",
//         age:12,
//         skills:["python","html","css"]

//     },
//     {
//         fn:"amol",
//         ln:"rao",
//         age:23,
//         skills:["python","html5","css3"]

//     }
// ]
// let [{fn:f11,ln:f22,age:f33,skills:[sk1,sk2,sk3]},{fn:f44,ln:f55,age:f66,skills:[sk4,sk5,sk6]}] = students
// console.log(sk6)
// console.log(f33)

// // program 6

// let info3  = {
//     fullName:"chinmay deshpande",
//     parent:{
//         mother:"kanchan deshpande",
//         father:"shirish deshpande"
//     },
//     skills:["python","js","sql"]
// }

// let {fullName,parent:{mother,father},skills:[s1,s2,s3]} = info3

// spread operator and rest operator


// rest operator
function addition(...vals){
    console.log(vals)
    return vals.reduce(function(acc,el){
        return acc + el
    },0)

}
let q1 = addition(11,22,33,4,5,6,7,8,9,4,5,6,7,8,9,0,5,6,7)
console.log(q1)


let names = ["pune","mumbai","bangalore","kolkata"]

function displayCity(c1,c2,c3){
    console.log("welcome "+c1)
    console.log("welcome "+c2)
    console.log("welcome "+c3)
}
displayCity(...names)


