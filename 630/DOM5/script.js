let headOne = document.querySelector('h1')
console.log(headOne)


headOne.addEventListener('click',function(){
    headOne.style.color = "green"
    headOne.style.background = "yellow"
})

let info  = {
    fullName:"chinmay",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
console.log(info.parent.father)
info.parent.father = "shirish s"