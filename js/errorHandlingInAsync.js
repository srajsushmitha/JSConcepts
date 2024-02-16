// error handling can be done in 2 ways
//Type 1 - using try catch block

const API_URL = "https://api.github.com/user/alok722";

const handlePromise = async () => {
  try {
    const res = await fetch(API_URL);
    const jsonValue = await res.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
};

handlePromise();

//type 2 - using catch after calling async function
//Since an async function returns a promise, can use .catch after function call
handlePromise().catch((err)=>console.log(err))
