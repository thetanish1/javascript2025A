
let inputElement = document.querySelector('input')
let buttonE = document.querySelector('#one')
let ulElement = document.querySelector('ul')
let body = document.querySelector('body')

buttonE.addEventListener('click',function(){
   let text  =  inputElement.value
   let newE = document.createElement('li')
   newE.textContent = text
   createButtons(newE)
   ulElement.appendChild(newE)
   inputElement.value =" "
})

function createButtons(li){
    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.classList.add('remove')
    li.appendChild(remove)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add('down')
    li.appendChild(down)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add('up')
    li.appendChild(up)
}

body.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)
    if(event.target.tagName == "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement 
            ul.removeChild(li)
        }
        else if(event.target.className == "down"){
            let li  =  event.target.parentElement 
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }

        }
        else if(event.target.className = "up"){
            let li  =  event.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }

        } 
    }
})