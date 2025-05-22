let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonElement = document.querySelector('#one')

buttonElement.addEventListener('click',function(){
    let text = input.value
    let newList = document.createElement('li') // <li></li>
    newList.textContent = text  // <li>Grapes</li>
    createButtons(newList)
    ulList.append(newList)
    input.value = ""
    

})
ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.className)
    // console.log(event.target.tagName)

    if(event.target.tagName === "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement 
            ul.removeChild(li)
            
        }
        else if(event.target.className == "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextE = li.nextElementSibling 
            if(nextE)
            ul.insertBefore(nextE,li)
        }
        if(event.target.className == "up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevE = li.previousElementSibling 
            if(prevE)
            ul.insertBefore(li,prevE)
        }



    }



})










function createButtons(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove') // <button class = "remove">Remove</button>
    li.append(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.classList.add('up') // <button class = "up">Up</button>
    li.append(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.classList.add('down') // <button class = "down">Down</button>
    li.append(down)

}

