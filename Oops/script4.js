// class Calculator{
//     // addition(x,y){
//     //     console.log(x+y)
//     // }
//     // addition(x,y,z){
//     //     console.log(x+y+z)
//     // }
//     // addition(x,y,z,a){
//     //     console.log(x+y+z+a)
//     // }

//     addition(x = undefined , y = undefined , z = undefined , a = undefined){

//         if(x != undefined && y != undefined && z != undefined && a != undefined){
//             console.log(x+y+z+a)
//         }
//         else if(x != undefined && y != undefined && z != undefined){
//             console.log(x+y+z)
//         }
//         else if(x != undefined && y != undefined){
//             console.log(x+y)
//         }

//     }

// }
// cal  = new Calculator()
// cal.addition(13,4)
// cal.addition(13,4,5)
// cal.addition(13,4,5,6)


// polymorphism overiding

// class WorldBanK {
//     save() {
//         console.log(" I am save from WB")
//     }
//     loan() {
//         console.log("I am loan from WB")
//     }
// }

// class SBI extends WorldBanK {
//     save() {
//         console.log(" I am save from SBI")
//     }
//     loan() {
//         console.log("I am loan from SBI")
//     }

// }
// nagpur = new SBI()

// nagpur.save()
// nagpur.loan()


class Human {
    talk(){
        console.log("hi hello")
    }
}

class Dog {
    talk(){
        console.log("bow bow")
    }
}

function call_talk(obj){
    obj.talk()
}

h = new Human()
d = new Dog()

call_talk(h)
call_talk(d)