const button = document.querySelector('.click');
const resetBtn = document.querySelector('.reset');
let box = document.querySelector('.box');

let count = 0;

function handleClick() {
  count += 1;
  box.innerHTML = count;
}

function reset() {
  count = 0;
  box.innerHTML = count;
}

button.addEventListener('click', handleClick);
resetBtn.addEventListener('click', reset); 
console.log(button)
// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };