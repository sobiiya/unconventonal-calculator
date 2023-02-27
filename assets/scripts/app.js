let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  let calcDescripton = `${resultBeforeCalc} ${operator} ${calcNumber} `;
  outputResult(currentResult, calcDescripton);
}
function writeToLog(prevNumber, operation, enteredNumber, newResult) {
  let logEntry = {
    number: prevNumber,
    operation: operation,
    enteredNumber: enteredNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculateResult(calculationType) {
  let enteredNumber = getUserNumberInput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber
  ){
    return
  }

  let intialResult = currentResult;
  let mathOperator;

    if (calculationType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }
  creatAndWriteOutput(mathOperator, intialResult, enteredNumber);
  writeToLog(intialResult, calculationType, enteredNumber, currentResult);
}
function add() {
  calculateResult("ADD");
}
function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
