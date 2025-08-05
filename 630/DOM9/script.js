

let ulList = document.querySelector('ul')
let inputElement = document.querySelector('input')
let butttonA = document.querySelector('button')

butttonA.addEventListener('click',function(){
    let text = inputElement.value  // papaya
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = text   // <li>Papaya</li>
    ulList.appendChild(newElement)
    inputElement.value  = ""

})

