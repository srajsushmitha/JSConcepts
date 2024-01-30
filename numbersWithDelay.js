//code to display digits using setTimeout
//Do NOT use var i since it has global scope and it'll be set to 6 by the time setTimeout function is completed
//i*1000 increases delay by 1 sec
for(let i=1; i<=5;i++){
  setTimeout(function(){
    console.log(i)
  }, i*1000)
}