let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    headOne.textContent = "Bye"
    headOne.style.color = "red"
    headOne.style.background = "yellow"
})

let info = {
    fn:"chinmay",
    ln:"deshpande",
    parent:{
        mother:'kanchan',
        father:"shirish"
    }
}
console.log(info.fn)
console.log(info.ln)
console.log(info.parent.mother)
info.parent.mother = "kanchan s"
console.log(info)