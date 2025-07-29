
//<h2 id = "one" class ="two" name="nm">Head</h2>
// CSS - selector
// id
let byId = document.querySelector('#one')
console.log(byId)
// byClass
let byClass = document.querySelector(".two")
console.log(byClass)
// by TagName
let byTagName = document.querySelector('h2')
console.log(byTagName)
// byName - tagName[attribute="value"]
let byName = document.querySelector("h2[name='nm']")
console.log(byName)

byId.addEventListener('click',function(){
    byId.style.color = "red"
    byId.textContent = "chinmay"
})
