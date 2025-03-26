// <h1 id = "one" class = "two" name = "nm">Hello</h1>

// CSS selector

// byTagName
let byTagName =  document.querySelector('h1')
// byId
let byId =  document.querySelector('#one')
// byClass
let byClassName =  document.querySelector('.two')
// byAttr
let byAttr =  document.querySelector('h1[name="nm"]')

console.log(byTagName)
console.log(byId)
console.log(byAttr)
console.log(byClassName)

// console.log(byTagName.textContent)
// byTagName.textContent ="bye"

byTagName.addEventListener('click',function(){
    byTagName.textContent = "Bye"
})
