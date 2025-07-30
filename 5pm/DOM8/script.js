// create element , retrive , udate , delete
// to add attribue , to retrive attribute , to update , delete 
// <h1 id = "one" class = "two" name = "name">Heading</h1>

// <h1 id = "heading" class = "headingClass">Fruits</h1>    
// <ul>
//     <li class = "fr">Apple</li>
//     <li class = "fr">Mango</li>
//     <li class = "fr">Banana</li>
//     <li class = "fr">Grapes</li>
// </ul>
// <input type="text">
// <button name = "add">AddE</button>

//  CRUD operation with element
// let byClass = document.querySelectorAll('.fr')
// let ulList = document.querySelector('ul')
// ulList.addEventListener('click',function(){
//     let newLi = document.createElement('li') // <li></li>
//     newLi.textContent = "Papaya"
//     ulList.appendChild(newLi)
//     ulList.removeChild(newLi)

// })

// Attribute - class
let byHeading = document.querySelector('#heading')
// retrive
console.log(byHeading.className)
// to update the attribute
byHeading.classList.add("secondClass")
// remove the attribute
byHeading.classList.remove("headingClass")
// toggle
byHeading.classList.toggle('headingClass')
// toggle - off
byHeading.classList.toggle('headingClass')

// other arrtibute
let val = byHeading.getAttribute('id')
console.log(val)
// update 
byHeading.setAttribute('id',"chinmay")
// add
byHeading.setAttribute('name',"deshpande")
// delete
byHeading.removeAttribute('id')
console.log(byHeading)




