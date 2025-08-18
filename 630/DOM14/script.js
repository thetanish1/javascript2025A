
//  <h1 id="one">My heading</h1>
//     <p class='two'>para</p>
//     <ul>
//         <li class='fr' name='nm'>Apple</li>
//         <li class='fr' name='nm'>Mango</li>
//         <li class='fr' name='nm'>Banana</li>
//         <li class='fr' name='nm'>Orange</li>
//     </ul>

// id
let idElement = document.querySelector('#one')
console.log(idElement)
let byClassName = document.getElementById('one')
console.log(byClassName)


// class
let byFirstElementByClassFr = document.querySelector('.fr')
let byClassFr = document.querySelectorAll('.fr') // node list
console.log(byFirstElementByClassFr)
console.log(byClassFr)
// for(let i = 0 ; i < byClassFr.length ; i++){
//     //console.log(i)
//     console.log(byClassFr[i].textContent)
// }

let htmlCollection = document.getElementsByClassName('fr') // html collection
console.log(htmlCollection)

// tagName 
let firstLiElement = document.querySelector('li') // single Element
let allLiElement = document.querySelectorAll('li') // nodeList
let allLiElementHtmlCollection = document.getElementsByTagName('li') // html collection

console.log(firstLiElement)
console.log(allLiElement)
console.log(allLiElementHtmlCollection)

// name
let firstE = document.querySelector('[name="nm"]') // firstElement
let allName = document.querySelectorAll("[name='nm']") // NodeList
let allElementName = document.getElementsByName('nm') // NodeList

console.log(firstE)
console.log(allName)
console.log(allElementName)