//await can only be used in async function
const API_URL = "https://api.github.com/users/alok722"
let handlePromise=async()=>{
  //fetch is a promise
  //gives response object =>  readable stream
  //.json() is also a promise
  const user = await fetch(API_URL);
  const jsonValue = await user.json();
  console.log(jsonValue)
}
handlePromise()