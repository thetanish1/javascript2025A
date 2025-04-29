// bind

// call 

// apply

// method borrowing
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:27,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:45,
    // displayName:function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

// amol.displayName()
// chinmay.displayName()

//let displayName2 = amol.displayName

// let displayName2 = function(){
//     console.log(this.firstName + this.lastName)
// }
//displayName2()


// bind ,call, apply

let john  = {
    firstName:"john",
    lastName:"deo"
}

let mike = {
    firsrName:"mike",
    lastName:"tyson"
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare"
}

let displayName3 = function(word){
    console.log(this.firstName + this.lastName)
    console.log(word)
}


displayName3.apply(sarika,["hello"])

// displayName3.call(sarika,"hello")
// displayName3.call(mike,"hello")
// displayName3.call(john,"hello")
//displayName3.bind(sarika)()
// displayName3 = displayName3.bind(john) // function return
// // let displayName3 = function(){
// //     console.log(john.firstName + john.lastName)
// // }
// displayName3(word)






