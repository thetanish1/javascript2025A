

let headOne = document.querySelector('h1')
let reloadButton = document.querySelector('button')
// headOne.addEventListener('click',function(){
//     headOne.style.color = "red"
// })


// headOne.addEventListener('dblclick',function(){
//     headOne.style.color = "red"
// })

headOne.addEventListener('mouseover',function(){
    headOne.style.color = "red"
})

headOne.addEventListener('mouseout',function(){
    headOne.style.color = "green"
})

reloadButton.addEventListener('click',function(){
    window.location.reload()
})

// Javascript 
// Javscript is used to create delete update add elements based on user action
// Javascript is used to update add retrive delete attribute based on user action 
// action - click , dbclik , mouseover , mouseout 