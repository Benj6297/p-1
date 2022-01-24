const button = document.querySelector('button');
let box = document.querySelector('.box');

let count = 0;

function handleClick() {
  count += 1;
  box.innerHTML = count;
}

button.addEventListener('click', handleClick);


// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };