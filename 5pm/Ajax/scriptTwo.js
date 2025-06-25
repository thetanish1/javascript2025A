
// function additionA(){
//     console.log("hello ... A")
// }
// function additionB(){ 
//     console.log("hello ... B")
// }

// additionA()
// additionB()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("C is called ....")
//     },3000)

// }

// function additionD(){
//     console.log("D is called ..")
// }
// additionC()
// additionD()

// program 3

// function userInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//      setTimeout(function(){
//         console.log("user id")
//     },2000)

//      setTimeout(function(){
//         console.log("user info")
//     },1000)
// }

// userInfo()
// call back hell
function userInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("user id")
            setTimeout(function () {
                console.log("user info")
            }, 1000)
        }, 2000)
    }, 3000)
}
//userInfo()
// Promises 
// resolve , reject  , pending


// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5
//     if(a == b){
//         resolve("hello...")
//     }
//     else {
//         reject("bye....")
//     }
// })  
// // consume
// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2
let pro2 = new Promise(function (resolve, reject) {
    let fn = "chin"
    if (fn.length >= 7) {
        resolve([11, 22, 33, 44, 55])
    }
    else {
        reject([-11, -22, -33, -44, -55])
    }
})

pro2
.then(function(a){
    console.log(a[0])
})
.catch(function(b){
    console.log(b[1])
})
.finally(function(){
    console.log("i will always execute")
})



