//if a=2 it will return resolve method.thats mean it will return succuess
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("success")
    } else {
        reject("failed")
    }
})


//then function will call if our function res.and catch fucntion will
//call if our function rejected
p.then((massage) => {
    console.log("this is in  then")
}).catch((message) => {
    console.log("this is in the catch")
})

//Note:promise is very good for that function which takes lot of time
//in background downloding an img