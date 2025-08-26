

let  names = ["sarika","poorva","shraddha","ninad"]
names.push("ramika")
names.unshift("sumit")
console.log(names)


names = ["sarika","poorva","shraddha","ninad"]
names.pop()
names.shift()
console.log(names)

// push() pop() shift() unshift()
names = ["sarika","poorva","shraddha","ninad"]
let q1 = names.includes("poorva")
console.log(q1)

names = ["sarika","poorva","shraddha","ninad"]
let q2 = names.indexOf("Poorva")
console.log(q2)

// push() pop() shift() unshift() includes(), indexOf()

// map()  filter()  reduce() forEach() find() findIndex() some() every()

//                 0    1   2     3
let birthYear = [2000,2001,2002,2003]
// [25,24,23,22]
let q3 = birthYear.map(function(el,index,arr){
    return 2025 - el
})
console.log(q3)

let marks = [34,55,66,33,44,55,66,46]
let q4 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)

let cities = ["pune","nagpur","wadha"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

let numbers = [11,22,33]
let q5 = numbers.reduce(function(acc,el,index,arr){
    return acc + el  // 66
},0)
console.log(q5)


marks = [34,55,66,33,44,55,66,46]

let q6 = marks.filter(function(el){
    return el > 50
})
console.log(q6)

let q7 = marks.find(function(el){
    return el > 50
})
console.log(q7)

let q8 = marks.findIndex(function(el){
    return el > 50
})
console.log(q8)

marks = [34,55,66,33,44,55,66,4]
let q9 = marks.every(function(el){
    return el > 10
})
console.log(q9)


marks = [34,55,66,33,44,55,66,40]
let q10 = marks.some(function(el){
    return el < 10
})
console.log(q10)
// map() , filter(), reduce(), forEach()
// find(), findIndex(),some(), every()

let info = ["chinmay","shirish",12]
let q11 = info.join(' ')
console.log(q11)


let h = [11,22,33]
h.reverse()
console.log(h)

let cities2 = ["bandara","wardha","chandrapur"]
cities2.sort()
console.log(cities2)

// [ 'bandara', 'chandrapur', 'wardha' ]
console.log(cities2.at(2))

let arr1 = [11,22,33]
let arr2 = [44,55,66]
let arr3 = arr1.concat(arr2)
console.log(arr3)

// splice()

let country = ["india","china","pakistan","srilanka"]
//country.splice(2,2)
country.splice(2,2,"cuba","US")
console.log(country)

// slice()
//                0   1   2   3   4   5
let  numbersb = [111,222,333,444,555,666]
//               -6  -5  -4  -3  -2   -1
console.log(numbersb.slice(3))
console.log(numbersb.slice(3,5))
console.log(numbersb.slice(-5,4))
console.log(numbersb.slice(1,-1))
console.log(numbersb.slice(-1,-4))
// fill()

let h1 = [11,22,33,44,55,66,77]
let e2 =  h1.fill("@",2,5)
console.log(e2)