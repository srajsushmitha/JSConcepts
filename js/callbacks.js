// Callback functions can be called as Firstclass functions by it's definition but they are specifically used to handle asynchronous tasks in a synchronous single threaded lang
//The best example for a callback is setTimeout
//Timeout callback function is called after 5000ms or 5 sec

setTimeout(function(){
  console.log('within the timer')
}, 5000)

function x(y){
  console.log('within function x')
  y()
}

x(function y(){
  console.log('within y')
})
