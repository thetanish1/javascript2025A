// SetTimeout function without callback function and callback function

// this is without callback function
// function UserInfo(){
//     setTimeout(function(){
//         console.log("User is Created");
//     },1000);

//     setTimeout(function(){
//         console.log("User ID is Generated");
//     },2000);

//     setTimeout(function(){
//         console.log("User Info is Displayed");
//     },3000);
// }
// UserInfo()

// now we use callback hell for the execution the same code

// function employeinfo(){
//     setTimeout(function(){
//         console.log("Employee is generated");
//         setTimeout(function(){
//             console.log("Employee ID is Created");
//             setTimeout(function(){
//                 console.log("Employe info is Created");
//             },1000);
//         },2000);
//     },3000);
// }
// employeinfo()

// now with the callback function we we write the same code with the example of cheese , pizza and dough

// function getCheese(callback){
//     setTimeout (()=>{
//         const cheese='😍';
//         console.log("here is cheese",cheese);
//         callback(cheese);
//     },1000);
// }

// getCheese((cheese)=>{ // here the cheese is nothing but the function we declared here, and get input from above function
//     console.log("Got the cheese",cheese)
// })

// now to overcome with the problem, callback hell we use promises

// resolve , reject , pending

// let pro = new Promise(function (resolve, reject) {
//   let a = 10;
//   let b = 10;
//   if (a == b) {
//     resolve("Hello ");
//   } else {
//     reject("bye");
//   }
// });

// pro // here this is consume
//   .then(function (str) {
//     console.log(str);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Irrespective of what, i will execute");
//   });

// let pro1 = new Promise(function (resolve, reject) {
//   let firstname = "Tanish";
//   if (firstname.length >= 6) {
//     resolve("Great");
//   } else {
//     reject("Bad!");
//   }
// });

// pro1
//   .then(function (str1) {
//     console.log(str1);
//   })
//   .catch(function (error1) {
//     console.log(error1);
//   })
//   .finally(function () {
//     console.log("I will always execute");
//   });

// now we will use setTimeout, function and Promises at the same time

// function usercreate() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("User created");
//     }, 3000);
//   });
// }

// function userid() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("user id is created");
//     }, 2000);
//   });
// }

// function userinfo() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("user info is generated");
//     }, 1000);
//   });
// }

// usercreate() // consume & same function name as above
//   .then(function (str) {
//     console.log(str);
//     return userid();
//   })
//   .then(function (str) {
//     console.log(str);
//     return userinfo();
//   })
//   .then(function (str) {
//     console.log(str);
//   });

// async function getuserinfo() {
//   let r1 = await usercreate();
//   console.log(r1);

//   let r2 = await userid();
//   console.log(r2);

//   let r3 = await userinfo(); // same name of the function declared above with the logic
//   console.log(r3);
// }

function usercreate() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("user created");
    }, 3000);
  });
}

function userid() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("userid is created");
    }, 2000);
  });
}

function userinfo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("userifo is generated");
    }, 1000);
  });
}

usercreate()
  .then(function (str) {
    console.log(str);
    return userid();
  })
  .then(function (str) {
    console.log(str);
    return userinfo();
  })
  .then(function (str) {
    console.log(str);
  });

async function getuser() {
  let r1 = await usercreate();
  console.log(r1);

  let r2 = await userid();
  console.log(r2);

  let r3 = await userinfo();
  console.log(r3);
}
