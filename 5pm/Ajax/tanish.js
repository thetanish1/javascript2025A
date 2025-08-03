let clickButton = document.querySelector("#btn1");

function userInfo(page) {
  fetch(`https://reqres.in/api/users?page=${page}`, {
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
      response.data.forEach(function (el) {
        document.writeln(`<h1>${el.first_name}</h1>`);
        document.writeln(`<h1>${el.last_name}</h1>`);
        document.writeln(`<h1>${el.email} ${el.id}</h1>`);
        document.writeln(`<img src=${el.avatar}>`);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
clickButton.addEventListener("click", function (page) {
  userInfo(1);
});
