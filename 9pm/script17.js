

let firstName = "Chinmay"
console.log(firstName)

let q1 = firstName.toUpperCase()
console.log(q1)
let q2 = firstName.toLowerCase()
console.log(q2)

let q3 = firstName.includes("chi")
let q4 = firstName.includes("C")
console.log(q3)
console.log(q4)


// startsEnd

let fruitA = "apple"
let q5 = fruitA.startsWith("A")
console.log(q5)
let q6 = fruitA.startsWith("app")
console.log(q6)

// endsWith
let fruitB = "apple"
let q7 = fruitB.endsWith("le")
let q8 = fruitB.endsWith("e")
console.log(q7)
console.log(q8)


// trim()
let city = " goa "
console.log(city.length)
let q9 = city.trim()
console.log(q9.length)

// trimStart()
city = " goa "
let q10 = city.trimStart()
console.log(q10.length)

// trimEnd()
city = "goa "
let q11= city.trimEnd()
console.log(q11.length)

let info = ["chinmay","deshpande",7709192441]
let q12 = info.join('-')
console.log(q12)

let city2 = "chinmaydeshpande@gmail.com"
let q13 = city2.split('@')
console.log(q13)
//["chinmaydeshpande","gmail.com"]

let info4 = "I am learning javascript"
let q14 = info4.replace('javascript','python')
console.log(q14)

let info5 = "I am learning javascript and javascript"
console.log(info5.replaceAll('javascript',"python"))


let city5 = "chandrapur"

// 0    1     2    3    4   5   6   7   8    9
// c    h     a    n    d   r   a   p   u    r
//-10  -9     -8  -7   -6  -5  -4  -3  -2    -1
//city5.slice(startIndex,endIndex(not included))

// console.log(city5.slice(3))
// console.log(city5.slice(2,8))
// console.log(city5.slice(-9,7))
// console.log(city5.slice(1,-1))
// console.log(city5.slice(-1,1))

// p  u  n  e

let city20 = "pune"
let q111 = city20.indexOf("p")
console.log(q111)

let r22 = city20.indexOf('E')
console.log(r22)

let city33 = "chanda"
let r4 = city33.indexOf('a')
console.log(r4)
let r55 = city33.lastIndexOf("a")
console.log(r55)

// 0   1    2   3   4   5   6
// c   h    i   n   m   a   y

let firstNamee = "chinmay"
console.log(firstNamee.substring(1,3))
// slice and substring difference

let hh = firstNamee.charAt(0)
console.log(hh)

// ASCII value
let gg = firstNamee.charCodeAt(0)
console.log(gg)

console.log(firstNamee.repeat(3))
let country = "india"
console.log(country.padStart(10,"-"))
console.log(country.padEnd(10,"-"))
