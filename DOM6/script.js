let buttonOne  = document.querySelector('button')
let inputElement = document.querySelector('input')
let headOne = document.querySelector('h1')

// array , object , map , set , string , useddefined , boolean ,
// htmlElement

buttonOne.addEventListener('click',function(){
    let colorText = inputElement.value // "yellow"
    headOne.style.color = colorText
    inputElement.value = ""

})

