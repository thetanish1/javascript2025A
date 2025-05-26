// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id = "one">Fruits</h1>
//     <ul>
//         <li name = "fr">Apple</li>
//         <li name = "fr">Mango</li>
//         <li name = "fr">Banana</li>
//         <li name = "fr">Orange</li>
//     </ul>
//     <ol>
//         <li class = "vg">Tomato</li>
//         <li class = "vg">Potato</li>
//         <li class = "vg">Brinjal</li>
//         <li class = "vg">Ladfyfinger</li>
//     </ol>
//     <button >Add</button>
//     <button>delete</button>
//     <script src = "script.js"></script>
// </body>
// </html>

let byId = document.querySelector('#one')
//console.log(byId)

let byId2  =  document.getElementById("one")
//console.log(byId2)


// program 2
let firstClassElement  = document.querySelector('.vg')
//console.log(firstClassElement)
// nodeList
let nodeList = document.querySelectorAll('.vg')
console.log(nodeList)

for(let i = 0 ; i < nodeList.length ; i++){
    console.log(nodeList[i].textContent)
}
// html collection
let htmlCollection = document.getElementsByClassName('vg')
//console.log(htmlCollection)

// program 3
let byNamefirstElement = document.querySelector("[name='fr']") // single element
console.log(byName)

let byNameAllElement = document.querySelectorAll("[name='fr']") // multiple elements node List
console.log(byName)

let byNameE =  document.getElementsByName('fr')
console.log(byNameE)