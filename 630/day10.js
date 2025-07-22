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

// includes
let news = "northSouthEastWest"
let q33 = news.includes("north")
let q44 = news.includes("e")
console.log(q33)
console.log(q44)

// first occurence
let info = "i am learning javascript"
let e2 = info.replace("javascript","python")
console.log(e2)

// all occurence
let info2 = "i am learning python and python is easy"
info2 = info2.replaceAll("python","javascript")
console.log(info2)

// indexof
let city7 = "pune"
// 0   1   2    3
// p   u   n    e

let e22 = city7.indexOf("n")
e33 = city7.indexOf("N")
console.log(e22)
console.log(e33)

let e44 = city7.at(1)
console.log(e44)


let city8 = "nagpur"

let info3 = "chinmaydeshpande010@gmail.com"
//["chinmaydeshpande010","gmail.com"]
let e66  = info3.split("a")
console.log(e66)

info4 = "apple mango banana orange papaya"
let e77 = info4.split(" ")
console.log(e77)


let city9 = "nagpur"
city9 = city9.repeat(3)
console.log(e88)
console.log(city9)


let n = [11,22,33,44,55]
let ncopy = n.reverse()
console.log(ncopy)
console.log(n)