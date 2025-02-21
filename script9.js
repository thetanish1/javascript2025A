
//               0       1      2      3        4
let names  = ["chinmay","ram","sham","sachin","ravi"]
//              -5        -4     -3     -2       -1
//names.slice(startIndex,endIndex(included))
//slice
console.log(names.slice(2))
console.log(names.slice(1,4))
console.log(names.slice(-2))
console.log(names.slice(-3))
console.log(names.slice(0,-3))
console.log(names.slice(-5,4))
console.log(names.slice(-4,-1))
console.log(names.slice(-1,-4))

//splice
//           0        1         2           3        4
let city = ["pune","mumbai","bangalore","kolkata","chennai"]
// city.pop()
// city.shift()
//city.splice(startPfirstIndex,numberOfElements)
//city.splice(startPfirstIndex,numberOfElements,replacement)
city.splice(3,1,"nagpur")
console.log(city)

//fill
//             0  1  2  3  4  5  6  7  8  9  10
let numbers = [97,89,88,75,74,33,44,55,66,77,88]
numbers.fill("pass",6)
console.log(numbers)

//flat
let state  = [["Nagpur","Pune"],["Jaipur","Udaipur"],["Indore","Bhopal"]]
let rr = state.flat()
console.log(rr)