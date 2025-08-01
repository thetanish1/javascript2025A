// function addtionA(){
//     console.log("hello A")
// }
// function additionB(){
//     console.log("hello B")
// }

// additionA()
// addtionB()

// function additionA(){
//     setTimeout(()=>{
//         console.log("hello A")
//     },2000)
// }
// function additionB(){
//     console.log("Hello B")
// }
// additionA()
// additionB()

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created ...")
//     },3000)
//     setTimeout(function(){
//         console.log("get id ...")
//     },2000)
//     setTimeout(function(){
//         console.log("get info ...")
//     },1000)
// }
// getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created ...")
//         setTimeout(function () {
//             console.log("get id ...")

//             setTimeout(function () {
//                 console.log("get info ...")
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }
// getInfo()

// // Promise --- async sync or parallel

// let pro = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro
//     .then(function (str) {
//         console.log(str)
//     }, function (str) {
//         console.log(str)
//     })

// let pro2 = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro2
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// let pro3 = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5

//     if (x = y) {
//         resolve("hello ....")
//     }
//     else {
//         reject("bye ....")
//     }
// })

// pro3
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute....")
// })

// let pro4 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve("hello..")
//     }
//     else {
//         reject("bye ....")
//     }

// })

// pro4
// .then(function(str){
//     console.log(str)
//     return "hello ....2"
// })
// .then(function(str){
//     console.log(str)

// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// function userCreate (){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('user created')
//         },3000)
//     })

// }
// function Id (){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('user id')
//         },2000)
//     })

// }

// function Info (){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('info')
//         },1000)
//     })

// }

// userCreate()
// .then(function(str){
//     console.log(str)
//     return Id()
// })
// .then(function(str){
//     console.log(str)
//     return Info()
// })
// .then(function(str){
//     console.log(str)
// })

// asyn await

// async function getUserInfo(){
//     let r1 = await userCreate()
//     console.log(r1)
//     let r2 = await Id()
//     console.log(r2)
//     let r3 = await Info()
//     console.log(r3)
// }
// getUserInfo().then(function(){
//     console.log('End')
// })

// Practice................................................................

// function add() {
//   setTimeout(function () {
//     console.log("Hello world");
//   }, 2000);
// }

// function name() {
//   setTimeout(function () {
//     console.log("Hello from Tanish Dewase");
//   }, 1000);
// }
// add();
// name();

// callback hell

// function tanish() {
//   setTimeout(function () {
//     console.log("user created");
//     setTimeout(function () {
//       console.log("user id");
//       setTimeout(function () {
//         console.log("user info");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }
// tanish();

// callback function

// function getcheese(callback) {
//   setTimeout(() => {
//     const cheese = "😊";
//     console.log("Here is cheese" + cheese);
//     callback(cheese);
//   }, 2000);
// }
// getcheese((cheese) => {
//     console.log("got the cheese"+cheese)
// });

// function userinput(callbackfunction){
//     setTimeout(function(){
//         const cheese="😊"
//         console.log("here is the cheese"+cheese)
//         callbackfunction(cheese)
//     },3000);
// }

// userinput((cheese)=>{
//     console.log("Got the cheese"+cheese)
// })

// function name(firstname,lastnamefun){
//     console.log("Hello "+firstname);
//     lastnamefun();
// }

// function lastnamefun(){
//     console.log("Got it");
// }
// name("Tanish",lastnamefun)

// call back hell demonstration

// function getcheese(callback) {
//   setTimeout(() => {
//     const cheese = "😊";
//     console.log("here i got cheese"+cheese);
//     callback(cheese);
//   }, 2000);
// }

// function makeDough(cheese,callback) {
//   setTimeout(() => {
//     const dough = "💕"+cheese;
//     console.log("Here is Dough"+dough);
//     callback(dough);
//   }, 2000);
// }

// function makepizza(dough,callback) {
//   setTimeout(() => {
//     const pizza = "😍"+dough;
//     console.log("Pizza is here"+pizza);
//     callback(pizza);
//   }, 1000);
// }

// getcheese((cheese) => {
//   makeDough(cheese,(dough) => {
//     makepizza(dough,(pizza) => {
//       console.log("Ready with my pizza delivery"+pizza);
//     });
//   });
// });

// promises
// resolve, reject, pending

// let pro = new Promise(function (resolve, reject) {
//   let a = 10;
//   let b = 20;
//   if (a != b) {
//     resolve("Same value");
//   } else {
//     reject("Different Value");
//   }
// });
// pro.then(
//   function (message) {
//     console.log(message);
//   },
//   function (error) {
//     console.log(error);
//   }
// );





