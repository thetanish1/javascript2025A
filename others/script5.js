//              0         1       2      3
let names = ["chinmay","sarika","sham","ram"]

// retrive
console.log(names[0])

//update
names[0] = "tanmay"
console.log(names)

// totolnumber of element
console.log(names.length)

// length - 1 is lastIndex
//          0         1       2     3
names = ["chinmay","sarika","sham","ram"]
console.log(names.length)

// loop
//             0         1         2         3
let cities = ["pune","mumbai","bangalore","nagpur"]

// for 
for(let i = 0 ; i < cities.length ;i++){
    //console.log(i)
    console.log(cities[i])
}

// while loop
let i1 = 0
while(i1 < cities.length){
   // console.log(i1)
    console.log(cities[i1])
    i1 = i1 + 1
}