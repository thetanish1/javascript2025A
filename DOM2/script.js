// document.querySelector('h1').addEventListener('click',function(){
//     document.querySelector('h1').style.color ="green"
// })

//<h3 id = "three" class ="four" name = "nm">Head3</h3>

// CSS selector

// tagName

let byTagName = document.querySelector('h3')
console.log(byTagName)

// byid 
let byId = document.querySelector('#three')
console.log(byId)

// byClass
let byClassName = document.querySelector('.four')
console.log(byClassName)

// tagName[attribute='value']
let byAttr = document.querySelector('h3[id="three"]')
console.log(byAttr)
