// function addtionA(){
//     console.log("hello A")
// }
// function additionB(){
//     console.log("hello B")
// }

// additionA()
// addtionB()

// function additionA(){
//     setTimeout(()=>{
//         console.log("hello A")
//     },2000)
// }
// function additionB(){
//     console.log("Hello B")
// }
// additionA()
// additionB()


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created ...")
//     },3000)
//     setTimeout(function(){
//         console.log("get id ...")
//     },2000)
//     setTimeout(function(){
//         console.log("get info ...")
//     },1000)
// }
// getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created ...")
//         setTimeout(function () {
//             console.log("get id ...")

//             setTimeout(function () {
//                 console.log("get info ...")
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }
// getInfo()

// // Promise --- async sync or parallel 

// let pro = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro
//     .then(function (str) {
//         console.log(str)
//     }, function (str) {
//         console.log(str)
//     })


// let pro2 = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro2
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })



// let pro3 = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro3
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute....")
// })

 

let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello..")
    }
    else {
        reject("bye ....")
    }

})

pro4
.then(function(str){
    console.log(str)
    return "hello ....2"
})
.then(function(str){
    console.log(str)

})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})


function userCreate (){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })

}
function Id (){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user id')
        },2000)
    })

}

function Info (){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('info')
        },1000)
    })

}


// userCreate()
// .then(function(str){
//     console.log(str)
//     return Id()
// })
// .then(function(str){
//     console.log(str)
//     return Info()
// })
// .then(function(str){
//     console.log(str)
// })

// asyn await 

// async function getUserInfo(){
//     let r1 = await userCreate()
//     console.log(r1)
//     let r2 = await Id()
//     console.log(r2)
//     let r3 = await Info()
//     console.log(r3)
// }
// getUserInfo().then(function(){
//     console.log('End')
// })

















