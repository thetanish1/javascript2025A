function getUserList(page) {
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
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response;
    });
}

function renderHtml(obj) {
  document.writeln(`<h1>${obj.id}  ${obj.email} </h1>`);
}

async function getuserinfo(page) {
  let response = await getUserList(page);
  let id = response.data[0]["id"];
  let info = await getID(id);
  renderHtml(info.data);
}

getUserList(2);
//   .then(function (response) {
//     console.log(response.data[1]["id"]);
//     return response.data[1]["id"];
//   })
//   .then(function (id) {
//     return getID(id);
//   })
//   .then(function (response) {
//     console.log(response);
//     renderHtml(response.data);
//   });
