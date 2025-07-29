

function getListUsers(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response
        })
}

function getid(id) {
    return fetch(`https://reqres.in/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response
    })

}

function renderHtml(obj){
    document.writeln(`<h1>${obj.id}${obj.email}</h1>`)
}

async function getUserInfo(pageNumber){
        let response = await getListUsers(pageNumber)
        let id = response.data[0]['id']
        let info = await getid(id) 
        renderHtml(info.data)
}
getUserInfo(2)



// getListUsers(2)
// .then(function(response){
//     console.log(response.data[0]['id'])
//     return response.data[0]['id']
// })
// .then(function(id){
//     return getid(id)
// })
// .then(function(response){
//     console.log(response)
//     renderHtml(response.data)
// })
