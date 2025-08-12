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


let fn = "chinmay"

// 0  1  2  3  4  5  6
// c  h  i  n  m  a   y

e = fn.charAt(2)
console.log(e)

g = fn.charCodeAt(8)
console.log(g)

f = fn.codePointAt(8)
console.log(f)

// reverse

firstC = "hello"
rev = ""

// for(let i = 0 ; i < firstC.length ; i++){
//     //console.log(i)
//     //console.log(firstC[i])
//     rev = firstC[i] + rev
//     //       h      +  ""  ====> h
//     //       e      +  h   ====> eh
//     //       l      +  eh  ====> leh
//     //       l      + leh  =====> lleh
//     //       o      + lleh ======> olleh
    
// }
// console.log(rev)

// for(let i = firstC.length -1 ; i >= 0 ; i--){
//     rev = rev + firstC[i]
// }
// console.log(rev)


let city6 = "chandrapur"
// 0   1   2   3  4   5   6   7   8  9
// c   h   a   n  d   r   a   p   u   r
//-10  -9  -8  -7 -6  -5  -4  -3  -2  -1        

console.log(city6.slice(-5))
console.log(city6.slice(1,5))
console.log(city6.slice(1,-1))
console.log(city6.slice(-8,8))
console.log(city6.slice(-1,6))

info = "I am learning js and js is great"
e = info.replace("js","python")
console.log(e)

e = info.replaceAll("js","python")
console.log(e)