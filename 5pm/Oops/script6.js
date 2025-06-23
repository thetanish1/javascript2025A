// function declaration

// function expression 

// arrow function
// function declaration 
// function addition(x,y){
//     console.log(x+y)
//     return x + y
// }
// let r2  = addition(13,4)
// console.log(r2)

// // function expression
// let addition2 = function(x,y){
//     return x + y
// }
// let r3 = addition2(12,3)
// console.log(r3)

// // arrow function
// // let addition3 = (x,y) => {
// //     return x + y
// // }
// // let r4  = addition3(12,4)
// // console.log(r4)


// let addition4 = (x,y) =>  x + y
// let e33 = addition4(12,4)
// console.log(e33)

// Lexical scope
function addition() {
    let a = 10
    let b = 5
    console.log(a + b)
    function additionB() {
        let c = 9;
        let d = 3;
        console.log(a + b)
        console.log(c+d+e)
        function additionC(){
            let e = 89
            console.log(a+b+c+d)
            console.log(e)
        }
        additionC()
    }
    additionB()
}
addition()

// closures


//Actual difference arrow and function expression and function declartion


// Ajax