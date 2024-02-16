//Promise 1 with 3 sec delay
const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('setteled p1')
  },3000)
})

//Promise 2 with 1 sec delay
const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('setteled p2')
  },1000)
})

//Promise 3 with 2 sec delay
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('p3 failed')
  },2000)
})



//Promise.all takes an array of promises
//It waits for all promises to get resolved
//If any promise is rejected, error is thrown
//order of array element doesn't matter
Promise.all([p2,p1,p3])
.then((res)=>console.log(res))
.catch((err)=>console.error(err))



//Promise.allSetteled takes an array of promises
//It waits for all promises to be setteled even if a promise is rejected
//Returns an array of objects with status and value
Promise.allSettled([p3,p2,p1])
.then((res)=>console.log(res))
.catch((err)=>console.error(err))



//Promise.race takes an array of promises
//It waits for the first promise to get setteled(irrespective of success or failure)
Promise.race([p2,p3,p1])
.then((res)=>console.log(res))
.catch((err)=>console.error(err))



//Promise.any takes an array of promises
//It waits for any of the promises to get resolved
//If all of the promises fail, it returns an aggregate error
//err.errors forms an array
Promise.any([p2,p3,p1])
.then((res)=>console.log(res))
.catch((err)=>console.error(err.errors[1]))