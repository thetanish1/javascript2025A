
// program 1
// let headOne = document.querySelector('h1')
// headOne.addEventListener('click',function(){
//     headOne.textContent = "Bye"
// })

// // program2 

// let headOne = document.querySelector('h1')
// let buttonOne = document.querySelector('button')
// buttonOne.addEventListener('click',function(){
//     headOne.textContent = "Bye"
// })

//program 3
let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = headOne.textContent.toUpperCase()

})

// let info = {
//     "firstName":"chinmay"
// }
// console.log(info.firstName)
// info.firstName = info.firstName.toUpperCase()