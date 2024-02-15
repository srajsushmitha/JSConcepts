//MAP function
//method 1 - using separate functions
// 2 - binary
// 8 - octal
// 16 - hexa decimal
const arr = [2, 4, 6, 3, 5, 7];

function binary(x) {
  return x.toString(2);
}

const output1 = arr.map(binary);
console.log(output1);

//method 2 - using callback functions(named/anonymous)

const output2 = arr.map(function (x) {
  return x.toString(2);
});
console.log(output2);

//method 3 - using arrow functions
// can remove return statement and {} if logic can be written in a single statement
const output3 = arr.map((x) => x.toString(2));
console.log(output3);

//FILTER function
// filter out all the odd numbers in an array

const filteredArr = arr.filter((x) => x % 2);
console.log(filteredArr);
console.log(arr);

//Reduce function
//example 1 - finding sum of an array
//Let me explain using conventional method for finding the sum of an array elements

function findSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}
const res = findSum(arr);
console.log(res);

//now using reduce method
//acc - accumilator
//curr - current element of an array (NOT INDEX. IT'S THE ELEMENT OF AN ARRAY)
//0 - represents the initial value for accumilator

const result = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(result);

//example 2 - finding max element in an array
//conventional method

function findMax(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
  }
  return max;
}

const maxInArr = findMax(arr);
console.log(maxInArr);

//using reduce function

const maxEleInArr = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(maxEleInArr);

//Chaining in higher order functions
//Find out first name of people whose age is less than 30

const users = [{ firstName: "mathew", lastName: "perry", age: 40 }, { firstName: "robert", lastName: "williams", age: 20 },{ firstName: "chandler", lastName: "bing", age: 35 },{ firstName: "joey", lastName: "tribiyani", age: 28 }];

const filteredRes = users.filter((x)=>x.age < 30).map((x)=>x.firstName)

console.log(filteredRes)


//using reduce
const reducedArr = users.reduce(function(acc, curr){
  if(curr.age < 30){
    acc.push(curr)
  }
  return acc
},[]).map(x=> x.firstName)
console.log(reducedArr)

