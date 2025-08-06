// types of function
//1. function declaration
//2. function expression
//3. arrow function

// function declaration
function tanish() {
  console.log("hello world");
}
tanish();

// function expression
function tanish1(a, b) {
  console.log(a + b);
}
tanish1(10, 2);

// Arrow function
let tanish2 = () => {
  console.log("Hello tanish");
};
tanish2();

// immediate arrow function invoke

(() => {
  console.log("Hello javascript");
})();

(function (){
  console.log("Hello world");
})();

//arrow function
let a1 = () => {
  a = 10;
  b = 29;
  console.log(a + b);
};
a1();

const a2 = function (name) {
  return `${name}`;
};
console.log(a2("Tanish"));

let a3 = function tanish(city) {
  return `${city}`;
};
console.log(a3("nagpur"));

// named function
function dewase() {
  console.log("Hello from named function");
}

dewase();

// anonoyms function
let s1 = function () {
  return "Hello from anonymous function";
};
console.log(s1());

// storing in variable

let s2 = function add(a, b) {
  return a + b;
};
console.log(s2(10, 3));

// callback function

function namestudent(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Bye");
}
namestudent("tanish", sayBye);

(function (){
  console.log("Invoking anonymous Function ")
})();


/////////////////////////////////////////////
// Arrow function
let ab = ()=>{
  return "Hello from Arrow Function"
}
console.log(ab())

let sun= (a,b)=>{
  return `${a} ${b}`
}
console.log(sun(1,2))

///////////////////////////////////////////
// Async function 

function d1(){
  setTimeout(function (){
    console.log("Hello from Async Code")
  },3000)
}
d1()

function d2(a,b){
  setTimeout(()=>{
    console.log(a+b)
  },2000)
}
d2(10,2)
