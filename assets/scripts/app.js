let defaultResult=0;
let currentResult=defaultResult;
let logEntries=[];

function getUserNumberInput(){
  return  parseInt(userInput.value)
}

function creatAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    let calcDescripton=`${resultBeforeCalc} ${operator} ${calcNumber} `
    outputResult(currentResult,calcDescripton)
}
function writeToLog(prevNumber,operation,enteredNumber,newResult){
    let logEntry={
        number:prevNumber,
        operation:operation,
        enteredNumber:enteredNumber,
        result:newResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}
function add(){
    let enteredNumber=getUserNumberInput()  
    let intialResult=currentResult
   
    currentResult=currentResult +enteredNumber
    creatAndWriteOutput('+',intialResult,enteredNumber)
    writeToLog(intialResult,'ADD',enteredNumber,currentResult)

} 
function subtract(){
    let enteredNumber=getUserNumberInput()
    let intialResult=currentResult
   
    currentResult=currentResult -enteredNumber
    creatAndWriteOutput('-',intialResult,enteredNumber)
    writeToLog(intialResult,'SUBTRACT',enteredNumber,currentResult)

}

function multiply(){
    let enteredNumber=getUserNumberInput()
    let intialResult=currentResult
   
    currentResult=currentResult *enteredNumber
    creatAndWriteOutput('*',intialResult,enteredNumber)
    writeToLog(intialResult,'MULTIPLY',enteredNumber,currentResult)


}
function divide(){
    let enteredNumber=getUserNumberInput()
    let intialResult=currentResult
   
    currentResult=currentResult /enteredNumber
    creatAndWriteOutput('/',intialResult,enteredNumber)
    writeToLog(intialResult,'DIVIDE',enteredNumber,currentResult)


}

addBtn.addEventListener("click",add)
subtractBtn.addEventListener("click",subtract)
multiplyBtn.addEventListener("click",multiply)
divideBtn.addEventListener("click",divide)

