//demonstrating closures along with event listeners
//! Number will return float whereas parseInt will return whole number
//? parseInt will take 3 args - element, index and array. 3rd arg is ignored but not 2nd
function addEventListner(){
  let count = 0;
  document.getElementById('clickme').addEventListener("click", function v(){
    console.log('Button clicked', ++count)
  })
}
addEventListner();
