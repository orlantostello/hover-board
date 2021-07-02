const board = document.querySelector('#board');
const SQUARES_NUMBER = 750;
const colors = [
  '#ac1616',
  '#9c257e',
  '#4c4adb',
  '#36ce28',
  '#110a77',
  '#b5e62f',
  '#4debe3',
];

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const squaretest = document.querySelector('.square');
// const wt = squaretest.getPropertyValue('width');
// console.log(wt);
// currentTarget.value;
const wre = squaretest.style.width;

console.log(wre.target.value);
