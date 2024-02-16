//Would suggest to have breakpoints while executing this program and check call stack to understand better

//2 promises with 20 and 40 secs delay
const pr1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve('Promise 1 resolved');
  }, 20000)
})

const pr2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve('Promise 2 resolved');
  }, 40000)
})

//await can only be used inside async function
//JS engine waits untill promise is resolved(function execution is suspended when it sees await)
//handlePromise() is removed from call stack untill it's resolved

let handlePromise = async()=>{
  console.log('Within promise')
  const res1 = await pr1;
  console.log('response from promise 1', res1)
  

  const res2 = await pr2;
  console.log('response from promise 2', res2)

}
handlePromise()
console.log('Demonstrating async await')

//conventional way of displaying data from promise

// let getData = (()=>{
//   pr.then((res)=>console.log(res))
//   console.log('Within promise')

// })
// getData()
