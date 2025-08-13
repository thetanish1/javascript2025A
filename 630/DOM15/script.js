// javascript is used
// To create the element 
// To update the update
// To retrive the element
// To delete the element 
//(based of user action)

// To retrive the attribute
// To update the attribute
// To delete the attribute
// To add the attribute

//<h1 id = "one">Hello</h1>
//Properties and methods

// <h1 id = "one">HeadingOne</h1>
//     <p class = "para">Para</p>
//     <ul>
//         <li class = "fr">Apple</li>
//         <li class = "fr">Banana</li>
//         <li class = "fr">Orange</li>
//         <li class = "fr">Grapes</li>
//     </ul>

console.log(document.querySelectorAll('.fr'))
let firstLiElement  = document.querySelector('.fr')
console.log(firstLiElement)
firstLiElement.classList.add('fr2')
firstLiElement.classList.remove('fr')
firstLiElement.classList.toggle('fr')
firstLiElement.classList.toggle('fr')

let headingOne = document.querySelector('h1')
let qwertyOne = headingOne.getAttribute('id')
headingOne.setAttribute('id','two')
console.log(headingOne.getAttribute('id'))
headingOne.setAttribute('class',"classTwo")
headingOne.removeAttribute('class')
