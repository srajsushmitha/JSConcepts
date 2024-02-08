//using var which is global scope to demonstrate closure
// check numbersWithDelay file to see how we can use let instead of var
for(var i=1;i<=5;i++){
  function count(i){
    setTimeout(() => {
      document.write(i + " ")
    }, i*1000);
  }
  count(i);
}