// promise one by one 
// dependency ----> one request then another request
// multiple promises ----> execution ---> parallel 


let p1  = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hello....")
    },3000)
})
let p2  = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hello....2")
    },2000)
})
let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("hello....3")
    },1000)
})

// promise.all()
// promise.race()
// promise.allSettled()
// promise.any()
// parallel -----execution

// Promise.all([
//     p1,p2,p3
// ])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.log(err)
// })



// async function PAll(){
//     try{
//         let result = await Promise.all([p1,p1,p3])
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// PAll()


// Promise.race()

// Promise.race([p1,p2,p3])
// .then(function(result){
//     console.log("First to settle",result)
// })
// .catch(function(err){
//     console.log("First to reject",err)
// })


// async function Prace(){
//     try {
//        let result =  await Promise.race([p1,p2,p3])
//        console.log(result)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
//Prace()


// All settled

// Promise.allSettled([p1,p2,p3])
// .then(function(result){
//     console.log(result)
// })

// async function AllSettled(){
//     let result = await Promise.allSettled([p1,p2,p3])
//     console.log(result)
// }
//AllSettled()

// Promise.any()


Promise.any([p1,p2,p3])
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.log(err)
})

async function Pany(){
    try {
    let result = await Promise.any([p1,p2,p3])
    console.log(result)
    }
    catch(err){
        console.log(err)
    }

}