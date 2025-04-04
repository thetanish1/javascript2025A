
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
//     <script src = "script2.js"></script>
// </body>
// </html>



// <h1 id = "one" class ="two" name = "nm">Fruits</h1>

let byId = document.querySelector('#one')
let byId2 = document.getElementById('one')


//         <li class = "vg" name = "vgn">Brinjal</li>
//         <li class = "vg" name = "vgn">Garlic</li>
//         <li class = "vg" name = "vgn">Onion</li>
//         <li class = "vg" name = "vgn">LadyFinger</li>


let allLi = document.querySelectorAll('li') // nl
let allLi2 = document.getElementsByTagName('li') // hc


// let byNodeList = document.querySelectorAll('.vg') // nodeList
// let byClassName = document.getElementsByClassName('vg') // hc

// let nm = document.querySelectorAll('[name="vgn"]') // nl
// let nm2 = document.getElementsByName('vgn') //nl

