let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let inputT = document.querySelector('input')

buttonOne.addEventListener('click',function(){
    let text = inputT.value
    let newLi = document.createElement('li')  // <li></li>
    newLi.textContent = text 
    createButtons(newLi)                // <li>Grapes</li>
    ulList.appendChild(newLi)
    inputT.value = ""

})


function createButtons(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent= "remove" // <button>Remove</button>
    remove.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(remove)


    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.classList.add('up') // <button class = "Up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" //<button>Down</button>
    down.classList.add('down')//<button class = "down">Down</button>
    li.appendChild(down) 

}