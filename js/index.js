//demonstrating closures along with event listeners
function addEventListner(){
  let count = 0;
  document.getElementById('clickme').addEventListener("click", function v(){
    console.log('Button clicked', ++count)
  })
}
addEventListner();