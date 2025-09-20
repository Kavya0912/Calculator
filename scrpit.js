const displayEl = document.getElementById('display');
const historyEl = document.getElementById('history');
let expr = '';

function updateDisplay() {
  displayEl.textContent = expr === '' ? '0' : expr;
}

const isOperator = ch => ['+','-','*','/'].includes(ch);
const lastChar = () => expr.slice(-1);

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.value;

    if (typeof val !== 'undefined') {
      if (isOperator(val)) {
        if (expr === '' && val !== '-') return;
        if (isOperator(lastChar())) expr = expr.slice(0, -1) + val;
        else expr += val;
      } else if (val === '.') {
        const parts = expr.split(/[\+\-\*\/]/);
        const lastNum = parts[parts.length - 1];
        if (lastNum.includes('.')) return;
        expr += '.';
      } else {
        expr += val;
      }
      updateDisplay();
    }
  });
});

