let firstName = "chinmay"
console.log(firstName)

let lastName = 'chinmay'
console.log(lastName)

let middleName = "shirish"
console.log(middleName)

// program 1

// whether the string stores the value by index ??

let h = 'chinmay'
console.log(typeof h)
console.log(h[0])


let city = "pune"
// 0    1    2      3
// p    u    n      e
console.log(city[0])

// for loop
let city2 = "chandrapur"

// 0  1   2  3   4   5   6   7   8   9
// c  h   a  n   d   r   a   p   u   r

for (let i = 0; i < city2.length; i++) {
    // console.log(i)
    console.log(city2[i])
}
// while loop
let i2 = 0
while (i2 < city2.length) {
    //console.log(i2)
    console.log(city2[i2])
    // increment / decrement
    i2 = i2 + 1
}


// program 2
// number + number  ===> number 
// string + number  ===> string 
// number + string  ===> string 
// string + string  ===> string

let a = 10
let b = 5
let c = "hello"
console.log(a + b + c)
// number + number
//10 + 5
// 15 + "hello"
// "15 hello"

console.log(c + b + a)

// string  + number + number
//"hello" + 5 ===> 
// "hello5"+ 10 
// string + number 
// string ===>"hello510"

console.log(a + c + b)
// program 3 
// string interpolation 

let firstName2 = "chinmay"
let lastName2 = "deshpande"

// My firstName is chinmay and lastName is deshpande
// string concat
console.log("My firstName is " + firstName2 + " and lastName is " + lastName2)
console.log(`My firstName is ${firstName2} and my lastName is ${lastName2}`)


// program 4
// Gym 
// action - excercise
// return - health

// methods of string
// upperCase()
let city3 = "nagpur";
let q1 = city3.toUpperCase()
console.log(q1)

// lowercase()
let city4 = "Nagpur";
let q2 = city4.toLowerCase()
console.log(q2)

// startswith()
let city5 = 'mumbai'
let q3 = city5.startsWith("m")
let q4 = city5.startsWith("Mum")
console.log(q3)
console.log(q4)

// endswith()
let city6 = "mumbai"
let q5 = city6.endsWith("i")
let q6 = city6.endsWith("bai")
console.log(q5)
console.log(q6)

// includes()
let fruits = "apple mango banana orange grapes"
let q7 = fruits.includes("apple")
console.log(q7)


let info = `I am learning javascript`
let w2 = info.replace("javascript", "python")
console.log(w2)


let info2 = `I am learning javascript and javascript is good language`
let w33 = info2.replaceAll("javascript", "python")
console.log(w33)

let info5 = ["chinmay", "deshpande", "gmail.com"]
let w44 = info5.join('-')
console.log(w44)

//chinmay-deshpande-gmail.com
//["chinmay","deshpande","gmail.com"]
let w55 = w44.split("-")
console.log(w55)

let city22 = "chandrapur";
//   0     1     2   3    4    5    6   7    8    9
//   c     h     a   n    d    r    a   p    u    r
//  -10   -9    -8  -7    -6   -5  -4  -3   -2    -1
//city22.slice(startIndex,endIndex)
// let r11 = city22.slice(2)
// console.log(r11)
console.log(city22.slice(2, 9))
console.log(city22.slice(-10, -1))
console.log(city22.slice(-10, 5))
console.log(city22.slice(-1, -5))
let r22 = city22.charAt(3)
console.log(r22)

let y22 = city22.charCodeAt(3)
console.log(y22)

let fruit = "apple"
let q22 = fruit.indexOf("a")
console.log(q22)
console.log(fruit.indexOf("A"))

let g = "hello"
let r = "bye"

console.log(r.concat(g))
let q222 = r.concat(g).concat("bharat")
console.log(q222)

// DOM will start