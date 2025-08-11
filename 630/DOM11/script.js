

let buttonE = document.querySelector('#one')
let inputE  = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonE.addEventListener('click',function(){
    let text = inputE.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent  =  text // <li>papaya</li>
    createButtons(newElement)
    ulList.appendChild(newElement)
    inputE.value = ""
})

function createButtons(li){
    let remove = document.createElement('button')// <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add("remove") // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button')// <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.classList.add("up") // <button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button')// <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.classList.add("down") // <button class = "down">Donw</button>
    li.appendChild(down)

}