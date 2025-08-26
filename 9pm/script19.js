

let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        city:"pune",
        skills:["python","javascript"],
        age:34
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        city:"nagpur",
        skills:["python","javascript","cypress","sql"],
        age:25

    },
    {
        
        firstName:"amol",
        lastName:"rao",
        city:"pune",
        skills:["sql","mongoDB"],
        age:34

    },
    {

        firstName:"mayuri",
        lastName:"rao",
        city:"wardha",
        skills:["python","javascript","sql","mongoDB","playwright"],
        age:36

    }
]

// forEach  , filter , map , reduce , find, findIndex , every ,some

// program 5 
// average age of all students
let total = 0
for(let i = 0  ; i < students.length ; i++){
    //console.log(students[i].age)
    total = total + students[i].age
}
console.log(total/students.length)

// program 4
//name of students living in pune and having python skill

// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].city === "pune" && students[i].skills.includes('python')){
//         console.log(students[i].firstName)
//     }
// }

// program 3
// name of students living in pune
// for(let i = 0 ; i < students.length ; i++){
//     //console.log(students[i].city)
//     if(students[i].city === "pune"){
//         console.log(students[i].firstName)
//     }
// }

// program 2
// print total number skills :
// chinmay:2
// for(let i = 0 ; i < students.length ; i++){
//     console.log(students[i].firstName+":"+students[i].skills.length)
// }


// program 1
// print firstName and lastName of all students 
// for(let i = 0 ; i < students.length ; i++){
//     console.log(students[i].firstName+students[i].lastName)
// }










// console.log(students[0].firstName)
// console.log(students[0]['lastName'])
// console.log(students[students.length-1].firstName)