
let ul = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')

buttonOne.addEventListener('click',function(){
    let fruit = inputText.value // papaya
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruit // <li>papaya<li>
    createButton(newLi)
    ul.appendChild(newLi)
    inputText.value = ""

})

{/* <button class = "remove">remove</button>
<button class = "up">up</button>
<button class = "down">down</button> */}

function createButton(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = 'remove' // <button>remove</button>
    remove.classList.add('remove') //<button class="remove">remove</button>

    let up = document.createElement('button') // <button></button>
    up.textContent = 'up' // <button>up</button>
    up.classList.add('up') //<button class="up">up</button>

    let down = document.createElement('button') // <button></button>
    down.textContent = 'down' // <button>down</button>
    down.classList.add('down') //<button class="down">down</button>

    li.appendChild(remove)
    li.appendChild(up)
    li.appendChild(down)

}