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


//arrow function
let a1= ()=>{
    a=10
    b=29
    console.log(a+b)
}
a1();


const a2=function(name){
    return `${name}`;
}
console.log(a2("Tanish"))


let a3= function tanish(city){
    return `${city}`;
}
console.log(a3('nagpur'))


// named function 
function dewase(){
    console.log("Hello from named function")
}

dewase()

// anonoyms function 
let s1= function (){
  return "Hello from anonymous function"
}
console.log(s1())

//







