const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector("body");
const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
let timerId = null;

startRef.addEventListener("click", startBackgroundColor);
stopRef.addEventListener("click", stopBackgroundColor);

function startBackgroundColor() {
  startRef.disabled = true;

  timerId = setInterval(() => {
    const randomBackgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyRef.style.backgroundColor = randomBackgroundColor;
  }, 1000);
}

function stopBackgroundColor() {
  clearInterval(timerId);
  startRef.disabled = false;
}