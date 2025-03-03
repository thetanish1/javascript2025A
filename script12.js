// program 1

let city = "pune"
e = city.toUpperCase()
console.log(e)

let city2 = "Pune"
f = city2.toLowerCase()
console.log(f)

let city3 = " goa "
console.log(city3.length)
e = city3.trim()
console.log(e.length)

let city4 = " goa"
let e2 = city4.trimStart()
console.log(e2.length)

let city5 = "goa "
let e3 = city5.trimEnd()
console.log(e3.length)


let str = "hello"
console.log(str.repeat(3))


let str2 = "43"
let e4 = str2.padStart(5,'0')
console.log(e4)

let str3 = "43"
let e5 = str2.padEnd(5,'0')
console.log(e5)


let info = "i am learning js"
e6 = info.replace('js','python')
console.log(e6)


let info2 = ["chinmay","deshpande",7709192441]
e7 = info2.join("-")
console.log(e7)

info2 = e7.split('-')
console.log(info2)

let str6 = "chinmay deshpande"
e7  = str6.split('a')
console.log(e7)

//["chinm","y deshp","nde"]

let fruits = 'apple mango banana orange grapes chikoo'
let e8 = fruits.includes("Apple")
console.log(e8)

let lastName = "dani"
let firstName = "kanchan"

let w1 = lastName.startsWith('D')
let w2 = lastName.startsWith('da')
console.log(w1)
console.log(w2)

let w3 = lastName.endsWith('i')
let w4 = lastName.endsWith('ni')
console.log(w3)
console.log(w4)