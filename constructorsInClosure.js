//A constructor function
//count cannot be accessed from outside
//advantages of closure:- data hiding and encapsulation

function CounterCheck(){
  var count = 0;
  this.incrementCounter = function(){
    count++;
    console.log(count)
  }
  this.decrementCounter = function(){
    count--;
    console.log(count)
  }
}

var count1 = new CounterCheck();
count1.incrementCounter();
count1.incrementCounter();
count1.decrementCounter();

var count2 = new CounterCheck();
count2.incrementCounter();
