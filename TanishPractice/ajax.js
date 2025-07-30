// function addition (){
//     setTimeout(function(){
//         console.log("hello there")
//     },1)
// }
// addition()

// function subtraction(a,b){
//     setTimeout(function(){
//         let c=0
//         c=a+b
//         console.log(c)
//     },1)
// }
// subtraction(10,20)


function userinfo(){
    setTimeout(function(){
        console.log("hello a")
        setTimeout(function(){
        console.log("hello b")
    },3000)

    },2000)

    setTimeout(function(){
        console.log("hello c")
    },1000)
}
userinfo()