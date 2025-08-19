

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