// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id = "one" class ="two" name = "nm">Fruits</h1>
//     <ul>
//         <li>Apple</li>
//         <li>Mango</li>
//         <li>Banana</li>
//         <li>Chikoo</li>
//     </ul>
//     <h1>Vegetables</h1>
//     <ol>
//         <li class = "vg" name = "vgn">Brinjal</li>
//         <li class = "vg" name = "vgn">Garlic</li>
//         <li class = "vg" name = "vgn">Onion</li>
//         <li class = "vg" name = "vgn">LadyFinger</li>
//     </ol>
// </body>
// </html>


//<h1 id = "one" class ="two" name = "nm">Fruits</h1>
// document.querySelector('h1')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('h1[name= "nm"]')

// id 
let eleById  = document.getElementById('one')
console.log(eleById)

let headOne = document.querySelector('h1')
console.log(headOne)

// program 2 (nodeList)
let allHeadOne = document.querySelectorAll('h1')
console.log(allHeadOne)
// looping through nodeList
for(let i = 0 ; i < allHeadOne.length ; i++){
    console.log(allHeadOne[i].textContent)
}
// program 3
// print all text for all li elements in html page

let allLiElement = document.querySelectorAll('li')
for(let i = 0 ; i < allLiElement.length ; i++){
    console.log(allLiElement[i].textContent)
}

let byClassName = document.querySelectorAll('li.vg')
for(let i = 0 ; i < byClassName.length ; i++){
    byClassName[i].style.color = "green"
}

// program 3 
// all elements by name vgn 
let byName = document.querySelectorAll('[name="vgn"]')
for(let i = 0 ; i < byName.length ; i++){
    byName[i].style.color = "purple"
}

// program 4
let nl = document.querySelectorAll('.vg')
let hc = document.getElementsByClassName('vg')
console.log(nl)
console.log(hc)