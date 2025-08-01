
let heading = document.querySelector('h1')
let buttonOne = document.querySelector('button')
let input = document.querySelector('input')

console.log(heading)
console.log(buttonOne)
console.log(input)

buttonOne.addEventListener('click',function(){
    let colorText = input.value
    heading.style.color = colorText
    input.value = ""
})