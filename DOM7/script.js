{/* <h1>Fruits</h1>
    <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <li>Grapes</li>
    </ul>
    <input type="text" name="" id="">
    <button>Add element</button> */}

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    let fruitText = inputText.value // grapes
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitText // <li>grapes</li>
    ulList.appendChild(newLi)
    inputText.value   = ""

})