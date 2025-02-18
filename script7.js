// program 1
//                0    1     2   3
let birthYear = [2000,2001,2002,2003]
let ages = []
//[25,24,23,22,21]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    let x = 2025 - birthYear[i] 
    ages.push(x)
}
console.log(ages)

// program 2
let marks  = [25,23,14,15,16,17,22,24]
// [25,23,22,24]
let above20 = []
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 20){
        //console.log(marks[i])
        above20.push(marks[i])
    }
}
console.log(above20)

// program 3
let numbers = [11,22,33]
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    total = total + numbers[i]
    //        0   +    11      -------> 11
    //       11   +    22      -------> 33
    //       33   +    33       ------> 66
}
console.log(total)

// program 4
let cities = ["pune","mumbai","banglore","jaipur"]
for(let i = 0 ; i < cities .length ; i++){
    //console.log(i)
    //console.log(cities[i])
    console.log("welcme "+cities[i])
}