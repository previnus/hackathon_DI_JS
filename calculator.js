const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let firstOperand = null;
let operator = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (result.textContent === "0" || operator === "=") {
      result.textContent = number.textContent;
      operator = null;
    } else {
      result.textContent += number.textContent;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (firstOperand === null) {
      firstOperand = result.textContent;
      operator = op.textContent;
      result.textContent = "0";
    } else {
      const secondOperand = result.textContent;
      const resultValue = calculate(firstOperand, operator, secondOperand);
      result.textContent = resultValue;
      firstOperand = resultValue;
      operator = op.textContent;
    }
  });
});

equals.addEventListener("click", () => {
  if (firstOperand !== null && operator !== null) {
    const secondOperand = result.textContent;
    const resultValue = calculate(firstOperand, operator, secondOperand);
    result.textContent = resultValue;
    firstOperand = resultValue;
    operator = "=";
  }
});

clear.addEventListener("click", () => {
  result.textContent = "0";
  firstOperand = null;
  operator = null;
});

function calculate(firstOperand, operator, secondOperand) {
  switch (operator) {
    case "+":
      return parseFloat(firstOperand) + parseFloat(secondOperand);
    case "-":
      return parseFloat(firstOperand) - parseFloat(secondOperand);
    case "*":
      return parseFloat(firstOperand) * parseFloat(secondOperand);
    case "/":
      return parseFloat(firstOperand) / parseFloat(secondOperand);
    default:
      return null;
  }
}
