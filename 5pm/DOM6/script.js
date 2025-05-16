// program 1 js 
// let headOne = document.querySelector('h1')
// headOne.addEventListener('click',function(){
//     headOne.style.color = "red"
// })

// program 2 js 
// let buttonOne = document.querySelector('button')
// let headOne = document.querySelector('h1')

// buttonOne.addEventListener('click',function(){
//     headOne.style.color ="green"
// })

// program 3js 
// let headOne = document.querySelector('h1')
// let inputE = document.querySelector('input')
// let buttonE = document.querySelector('button')

// buttonE.addEventListener('click',function(){
//     let clText = inputE.value
//     headOne.style.color = clText
//     inputE.value = ""

    
// })

// program 4

// let ulList = document.querySelector('ul')
// let buttonE = document.querySelector('button')
// let inputE = document.querySelector('input')

// console.log(ulList)
// console.log(buttonE)
// console.log(inputE)


// buttonE.addEventListener('click',function(){
//     let text = inputE.value
//     let newList = document.createElement('li') // <li></li>
//     newList.textContent  = text   //<li>Grapes</li>
//     ulList.appendChild(newList)
//     inputE.value = " "
// })


// program 5
let bodyE =document.querySelector('body')

bodyE.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
    console.log(event.target.className)

})
