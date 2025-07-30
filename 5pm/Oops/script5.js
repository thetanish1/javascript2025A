
// class Main {
    
//     // same class , same method name , different signatue
//     public static void main(String[] args) {
//         System.out.println("Try programiz.pro");
//         addition(12,3);
//         addition(12,3,3);
//         addition(12,3,3,4);
//     }
    
//     public void addition(int x , int y){
//         System.out.println(x+y)
//     }
    
//     public void addition(int x , int y ,int z){
//         System.out.println(x+y+z)
//     }
    
//     public void addition(int x , int y ,int z ,int a){
//         System.out.println(x+y+z+a)
//     }
// }


// overloading in js 

class Calculator {

    // addition(x,y){
    //     console.log(x+y)
    // }

    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    
    
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

    // same class same method Name but different signature

    addition(x = undefined , y = undefined ,z=undefined , a = undefined){

        if(x != undefined && y != undefined && z != undefined  && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x + y + z)
        }
        else if(x != undefined && x != undefined){
            console.log(x + y)
        }

    }
    

}

let abc = new Calculator()
abc.addition(12,3)
abc.addition(12,3,3)
abc.addition(12,3,3,4)

class WorldBank {
    save(){
        console.log("save method is called")
    }

    loan(){
        console.log("loan method is called")
    }

}


class SBI extends  WorldBank {
    // same method name , different class and has a relationship
    save(){
        console.log("SBI save method is called")
    }

    loan(){
        console.log("SBI loan method is called")
    }

    
}

let sbiA = new SBI()
sbiA.loan()
sbiA.save()

// 8:30 am 
// 8:00 am























