
{/* <h1 id = "one"  class = "two" name = "nm">Name</h1>
    <ul>
        <li>Amit</li>
        <li>Bhavesh</li>
        <li>Chinmay</li>
    </ul>
    <input type="text">
    <button id = "one">AddElement</button>
 */}

 // retrive
 let retriveH = document.querySelector('#one')
 retriveH = document.getElementById('one')
 // update 
 retriveH.textContent = "Person's name"
 // add 
 let ulList = document.querySelector('ul')
 let newLi = document.createElement('li') // <li></li>
 newLi.textContent = "sarika" // <li>sarika</li>
 ulList.appendChild(newLi)
 // delete 
 ulList.removeChild(newLi)

 // Element attribute

 // <h1 id = "one"  class = "two" name = "nm">Name</h1>

let oneE = document.querySelector('#one')
console.log(oneE.className)
oneE.className = "three"
oneE.classList.add("four")
oneE.classList.remove("four")
oneE.classList.toggle("four")
oneE.classList.toggle("four")

// retrive
let vl = oneE.getAttribute('name')
console.log(vl)

// add
oneE.setAttribute('data-cy',"eleOne")
// update
oneE.setAttribute('data-cy',"eleTwo")

oneE.removeAttribute('data-cy')
