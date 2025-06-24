// function declaration
// function expression 
// arrow function

// function additionA(){
//     console.log("hello A")
// }

// function additionB(){
//     console.log("hello B")
// }
// additionB()
// additionA()


// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("Hello C...")
//     },2000)
// }

// function additionD(){
//     console.log("Hello  D...")
// }
// additionC()
// additionD()

// Program 3

// userCreate  -----------> userId ----------> userInfo
function userInfo() {
    setTimeout(function () {
        console.log("user Created")
    }, 3000)

    setTimeout(function () {
        console.log("user Id")
    }, 2000)

    setTimeout(function () {
        console.log("user Info")
    }, 1000)


}
//userInfo()

// Program 4
// Call back hell 
// async code ---------> sync 


function userInfo() {
    setTimeout(function () {
        console.log("user Created")
        setTimeout(function () {
            console.log("user Id")
            setTimeout(function () {
                console.log("user Info")
            }, 1000)

        }, 2000)
    }, 3000)

}
userInfo()

// Promises 
//  Async  code  ------ Sync  