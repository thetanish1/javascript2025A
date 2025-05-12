
let ulList = document.querySelector('ul')
let addB = document.querySelector('#one')
let inputText = document.querySelector('input')


addB.addEventListener('click',function(){
    let fri = inputText.value //"papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fri // <li>papaya</li>
    createButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})

ulList.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON")
        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        
        else if(event.target.className == "up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)
            }
        }
        
        else if(event.target.className == "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }
            
        }


    }



})











function createButton(li){
    let r = document.createElement("button") // <button></button>
    r.textContent = "Remove" //<button>Remove</button>
    r.classList.add("remove") //<button class = 'remove'>Remove</button>
    li.appendChild(r)


    let u = document.createElement("button") // <button></button>
    u.textContent = "Up" //<button>Up</button>
    u.classList.add("up") //<button class = 'up'>Up</button>
    li.appendChild(u)


    let d = document.createElement("button") // <button></button>
    d.textContent = "Down" //<button>Down</button>
    d.classList.add("down") //<button class = 'down'>Down</button>
    li.appendChild(d)
}






            // <button class="remove">Remove</button>
            // <button class="up">Up</button>
            // <button class="down">Down</button>
