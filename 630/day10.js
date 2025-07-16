let firstName = "chinmay"
console.log(firstName)
let fn = firstName.toUpperCase()
console.log(fn)

let lastName = "Deshpande"
let ln = lastName.toLowerCase()
console.log(ln)

// program 3
console.log(lastName.length)

let city  = "pune"
let q1  = city.startsWith("p")
let q2  = city.startsWith("pu")
let q3  = city.startsWith("Pu")
console.log(q1)
console.log(q2)
console.log(q3)

let city2  = "bhopal"
let q4 = city2.endsWith("al")
let q5  = city2.endsWith("l")
let q6 = city2.endsWith("Al")
console.log(q4)
console.log(q5)
console.log(q6)

// program 3
let city4 = " goa "
console.log(city4.length)
let q7 = city4.trim()
console.log(q7.length)

city4 = " goa "
let q8 = city4.trimStart()
console.log(q8.length)

city4 = "goa "
let q9 = city4.trimEnd()
console.log(q9.length)

// program 4
//  0      1       2      3     4      5     6    7    8    9
//  c      h       a      n     d      r     a    p    u    r
// -10    -9      -8     -7    -6     -5    -4   -3   -2    -1

let city5 = "chandrapur"
let q10 = city5.slice(0)
console.log(q10)
console.log(city5.slice(0,city5.length))
console.log(city5.slice(2,7))
console.log(city5.slice(2,-3))
console.log(city5.slice(-9,-3))
console.log(city5.slice(-9,8))
console.log(city5.slice(-1,-4))

// console.log(city5.length)
// slice(startIndex, endIndex(not included))
