let headOne = document.querySelector('h1')
let buttonE = document.querySelector('button')
let inputElement = document.querySelector('input')

buttonE.addEventListener('click',function(){
    let colorText = inputElement.value
    headOne.style.color = colorText
    inputElement.value = ""
})

