//<h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// tagName
let headOne = document.querySelector('h1')
console.log(headOne)

// class
let byClass = document.querySelector('.two')
console.log(byClass)

// id 
let byId = document.querySelector('#one')
console.log(byId)

//byAttr
let byAttr = document.querySelector("h1[name=nm]")
console.log(byAttr)

byAttr.addEventListener('click',function(){
    byAttr.style.color = "green"
})




// let info = {
//     fullName:"chinmay",
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }
// info.parent.mother = "kanchan s"