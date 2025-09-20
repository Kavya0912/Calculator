const displayEl = document.getElementById('display');
const historyEl = document.getElementById('history');
let expr = '';

function updateDisplay() {
  displayEl.textContent = expr === '' ? '0' : expr;
}

updateDisplay();
