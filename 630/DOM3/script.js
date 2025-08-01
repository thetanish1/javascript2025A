
//<h1 id = "one" class = "two" name = "three">Chinmay</h1>
// select the element 
// based on user action 
// change the element / add the element / update / delete element


// CSS selector
// selecting the element by tagName
let headOne = document.querySelector('h1')
console.log(headOne)

//selecting the element by className
let byClassName = document.querySelector('.two')
console.log(byClassName)

// selecting the element by ID
let byId = document.querySelector('#one')
console.log(byId)

// select by any Attribute
// tagName[attribute='value']
let byName = document.querySelector('h1[name="three"]')
console.log(byName)

byClassName.addEventListener('click',function(){
     byClassName.style.color  = "green"
})

//<p id = "para" class = "paraC" name = "paran">change me</p>

// tageName 
let byTagName = document.querySelector('p')
// id 
let byIdTwo = document.querySelector('#para')
// className
let byClassTwo = document.querySelector('.paraC')
// attribute
let byAttribute = document.querySelector('p[name=paran]')

console.log(byTagName)
console.log(byIdTwo)
console.log(byClassTwo)
console.log(byAttribute)

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "i am learning"
})

