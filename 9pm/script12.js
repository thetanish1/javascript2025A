
//              0          1        2         3       4      5
let names = ["chinmay","shirish","sarika","shraddha","ram","sham"]
//             -6         -5         -4      -3         -2     -1

console.log(names.slice(1))
console.log(names.slice(1,5))
console.log(names.slice(0,6))
console.log(names.slice(0,6))
console.log(names.slice(-3))
console.log(names.slice(-6,-3))
console.log(names.slice(1,-3))
console.log(names.slice(-6,3))
console.log(names.slice(-1,-3))




//console.log(names)
//names.slice(startIndex,endIndex(not included))


// splice()
//          0          1        2          3       4      5
names = ["chinmay","shirish","sarika","shraddha","ram","sham"]
// names.pop()
// names.shift()
console.log(names)
//names.splice("startIndex",numberOfElementToBeDeleted)
//names.splice(1,3)
// names.splice(2,1)
// console.log(names)
names.splice(2,2,"amit","raj")
console.log(names)


// program 3
let info = ["chinmay","deshpande",34]
let g2 = info.join(" ")
console.log(g2)

// program 4
// concat()

// let n = [11,22,33]
// let m = [44,55,66]
// console.log(n.concat(m))
// console.log(m.concat(n))


// program 5
//             0        1        2        3       4
let cities = ["pune","mumbai",'jaipur',"mumbai",`bhopal`]
f1 = cities.indexOf("Jaipur")
console.log(f1)
console.log(cities.at(2))

// program 6

cities = ["pune","mumbai",'jaipur',"mumbai",`bhopal`]
cities.reverse()
console.log(cities)

console.log(cities.sort())