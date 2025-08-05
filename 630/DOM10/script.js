
let ulElement = document.querySelector('ul')
let buttonE = document.querySelector('#one')
let inputE = document.querySelector('input')


// <button class="remove">Remove</button>
// <button class="up">Up</button>
// <button class="down">Down</button>

buttonE.addEventListener('click', function () {
    let text = inputE.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = text // <li>Papaya/li>
    createButtons(newElement)
    ulElement.appendChild(newElement)
    inputE.value = ""
})

function createButtons(li) {
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>
    let remove = document.createElement('button')  // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove') // <button class = "remove">Remove<button>
    li.appendChild(remove)


}