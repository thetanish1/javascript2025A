
// destructing
//              0         1       2
let names = ["chinmay", "sarika", "poorva"]
console.log(names)
let [q1, q2, q3] = names
let [c1, , c3] = names
let [a1, a2] = names
let [, b2, b3] = names
// let q1 = names[0]
// let q2 = names[1]
// let q3 = names[2]
// console.log(q1)
// console.log(q2)
// console.log(q3)
console.log(q1)
console.log(q2)
console.log(q3)

// program 2
//                    0                   1                    2
let states = [["wardha", "nagpur"], ["jaipur", "udaipur"], ["bhopal", "indore"]]
let [[c11, c12], [c13, c14], [c15, c16]] = states
// console.log(s1)
// console.log(s2)
// console.log(s3)
console.log(c15)
console.log(c11)

// program 3

let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12,
    rollNo: 34
}
let { firstName: fn, lastName, age, rollNo } = info
console.log(fn)
console.log(lastName)
console.log(age)
console.log(rollNo)

// program 4

let info2 = {
    studentOne: {
        fn: "chinmay",
        ln: "deshpande"
    },
    studentTwo: {
        fn: "sarika",
        ln: "pansare"
    }
}
let { studentOne: { fn: f1, ln: l1 }, studentTwo: { fn: f2, ln: l2 } } = info2
console.log(f2)
console.log(f1)

// program 5

let students =
    [
        {
            fullName: "chinmay deshpande",
            skills: 3
        },
        {
            fullName: "poorva vyas",
            skills: 5
        }

    ]

let [{fullName:q11,skills:s11},{fullName:q22,skills:s22}] = students
console.log(q11)
console.log(s11)
console.log(q22)
console.log(s22)

// program 6
let info5  = {
    fullName:"ram dani",
    skills:["python","css"]
}
let {fullName,skills:[w1,w2]} = info5
console.log(fullName)
console.log(w1)
console.log(w2)