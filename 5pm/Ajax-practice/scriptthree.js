// let pro = new Promise(function (resolve, reject) {
//   let a = 110;
//   let b = 20;
//   if (a < b) {
//     resolve("Correct Output");
//   } else {
//     reject("Incorrect Input");
//   }
// });

// pro
//   .then(function (str) {
//     console.log(str);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("No matter what, i will execute");
//   });

// let info = {
//   page: 2,
//   per_page: 6,
//   total: 12,
//   total_pages: 2,
//   data: [
//     {
//       id: 7,
//       email: "michael.lawson@reqres.in",
//       first_name: "Michael",
//       last_name: "Lawson",
//       avatar: "https://reqres.in/img/faces/7-image.jpg",
//     },
//     {
//       id: 8,
//       email: "lindsay.ferguson@reqres.in",
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       avatar: "https://reqres.in/img/faces/8-image.jpg",
//     },
//     {
//       id: 9,
//       email: "tobias.funke@reqres.in",
//       first_name: "Tobias",
//       last_name: "Funke",
//       avatar: "https://reqres.in/img/faces/9-image.jpg",
//     },
//     {
//       id: 10,
//       email: "byron.fields@reqres.in",
//       first_name: "Byron",
//       last_name: "Fields",
//       avatar: "https://reqres.in/img/faces/10-image.jpg",
//     },
//     {
//       id: 11,
//       email: "george.edwards@reqres.in",
//       first_name: "George",
//       last_name: "Edwards",
//       avatar: "https://reqres.in/img/faces/11-image.jpg",
//     },
//     {
//       id: 12,
//       email: "rachel.howell@reqres.in",
//       first_name: "Rachel",
//       last_name: "Howell",
//       avatar: "https://reqres.in/img/faces/12-image.jpg",
//     },
//   ],
//   support: {
//     url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
//     text: "Tired of writing endless social media content? Let Content Caddy generate it for you.",
//   },
// };

// console.log(info)

// info.data.forEach(function(element){
//     document.writeln(`
//         <h1> ${element.first_name} </h1>
//         <h1>${element.email} </h1>
//         <h1>${element.last_name} </h1>
//         <h1>${element.id} </h1>
//         <img src=${element.avatar} >

//         `);
// document.writeln(`<h1>${element.email} </h1>`);
// document.writeln(`<h1>${element.last_name} </h1>`);
// document.writeln(`<h1>${element.id} </h1>`)
// document.writeln(`<img src=${element.avatar} >`)
// })

// now make it clickable
// steps => select the button from UI, write the api which data we have to show => then print the data => then addevent listen to trigger the event.

// let clickButton = document.querySelector("#user");

// function userInfo(page) {
//   fetch(`https://reqres.in/api/users?page=${page}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": "reqres-free-v1",
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       response.data.forEach(function (element) {
//         document.writeln(`
//         <h1> ${element.first_name} </h1>
//         <h1>${element.email} </h1>
//         <h1>${element.last_name} </h1>
//         <h1>${element.id} </h1>
//         <img src=${element.avatar} >
//         `)
//       })
//     })
//     .catch(function () {
//       console.log();
//     });
// }
// clickButton.addEventListener("click", function () {
//   userInfo(1);
// });

function getListUser(page) {
  return fetch(`https://reqres.in/api/users?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response;
    });
}

function getID(id) {
  return fetch(`https://reqres.in/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(response){
    return response
  })
}

function renderHTML(obj){
    document.writeln(`<h1>${obj.id} & ${obj.email} </h1>`)
}

async function getuserinfo(pgno) {
    let response= await getListUser(pgno)
    let id= response.data[0] ['id']
    let info=await getID(id)
    renderHTML (info.data)      
}
getuserinfo(1)
  .then(function(response){
    console.log(response.data[0]['id'])
    return response.data[0]['id']
  })
  .then(function(response){
    return getID(id)
  })
  .then(function(response){
    console.log(response)
    renderHTML(response.data)
  })

// async function getUserInfo(pageNumber){
//         let response = await getListUsers(pageNumber)
//         let id = response.data[0]['id']
//         let info = await getid(id) 
//         renderHtml(info.data)
// }
