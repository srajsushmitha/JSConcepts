//Function statement
function abc(){
  console.log('This is a function statement');
}

//function expression
var functionvar = function (){
  console.log('this is a function expression')
}

functionvar();

//The main difference between these are hoisting.
//can call abc() before declaration
//calling functionvar() before declaration throws error since it'll be treated as variable


//Function declaration = function statement

//Ananymous function - function with no name
//Functions which do not have their own identity
//Below code throws syntax error

// function (){

// }



//you cannot use ananymous function as function statement. Instead can be used as value in function expression

//Named function expression
var a = function xyz(){
  console.log("within named function expression")
}

console.log(a());

//What do you think will happen when I call xyz()?
//A reference error is thrown


//Are arguments and parameters interchangable words?
//No.
//Parameters are the placeholders/values which are in the function scope
  function paramsAndArgs(param1, param2){
    console.log(param1,param2)
  }

//Arguments are the values you pass in calling function
  paramsAndArgs(5,10)

  //FirstClass functions/First class citizens
  //Not only a concept of JS-python,etc
  //Functions can be passed as params and also can be returned by a function
  //Can pass named/anonymous function

  paramsAndArgs(function(){
    console.log('param1')
  }, function sample(){
    console.log('param2')
  })

  //example for named function as first class functions

  function namedFunction (){
    console.log('this is a named function')
  }

  paramsAndArgs(namedFunction)

  //Arrow functions