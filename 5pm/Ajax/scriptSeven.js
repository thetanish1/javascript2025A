
// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

function getid(id) {
    return fetch(`https://reqres.in/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response
        })
}

function createTime() {
    return new Promise(function (resolve, reject) {
        let a = 10;
        let b = 100;
        setTimeout(function () {
            if (a == b) {
                resolve("hello")
            }
            else {
                reject("bye")
            }
        },100)
    })
}

async function getUserFirst(){
    try {
    let result = await Promise.any([
        getid(1),
        getid(2),
        createTime()
    ])
    console.log(result)
    }
    catch(err){

    }
}
getUserFirst()

// Promise.any([
//     getid(1),
//     getid(2),
//     createTime()
// ])
// .then(function(str){
//     console.log(str)
// })

// async function giveReason(){
//     let result =  await Promise.allSettled([
//         getid(1),
//         getid(2),
//         createTime()
//     ])
//     console.log(result)
// }
// giveReason()


// Promise.allSettled([
//     getid(1),
//     getid(2),
//     createTime()
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(str){
//     console.log(str)
// })


// async function whichFirst() {
//     try {
//         let result = await Promise.race([
//             getid(2),
//             createTime()
//         ])
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
 
// }
// whichFirst()




// Promise.race([
//     getid(2),
//     createTime()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('finally ......')
// })



// Promise.all([
//     getid(1),
//     getid(2),
//     getid(3),
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(err){
//     console.log(err)
// })


// async function getUser() {
//     try {
//         let result = await Promise.all([
//             getid(1),
//             getid(2),
//             getid(3),
//         ])
//         console.log(result)
//     }
//     catch (error) {
//         console.log(error)
//     }

// }
// let users  = getUser()
// console.log(users)