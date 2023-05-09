const buttons = document.querySelectorAll('button')
const displayResult = document.getElementById('result')

const operatorButtons = document.getElementsByClassName('operators')
const equalsButton = document.getElementById('equalsbutton')
const calculation = document.getElementById('calculation')
const calculationStartText = "0"
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const numberButtons = document.getElementsByClassName('numbers')
const ANSButton = document.getElementById('lastanswer')

var currentOperator = null;
var lastOperator = null;
var lastInputIsOperator = false
var lastNum = null;
var currentNum = null;
var isResult = false;
var currentResult = 0;


for (let number of numberButtons) {
    lastInputIsOperator = false
    number.onclick = () => {
        console.log(calculation.innerText.charAt(calculation.innerText.length-1))
        if (number.id == "lastanswer") {
            if (displayResult.innerText == 0) {
                displayResult.innerText = currentResult
            }
            else {
            displayResult.innerText += currentResult
            }
        }
    
        else if (((displayResult.innerText == 0) || isResult) && (number.innerText != ".")) { //(calculation.innerText.charAt(calculation.innerText.length-1) == "=") ||
            calculation.innerText += " "
            displayResult.innerText = number.innerText
            isResult = false;
        }

        else {
            displayResult.innerText += number.innerText 
        }
    }
}

for (let operator of operatorButtons) {
    operator.onclick = () => {
        let operaterText = operator.innerText
        

        if (displayResult.innerText == 0) {
            window.alert("Please enter a number first.")
        }

        // else if (calculation.innerText.slice(-1) != "/\d/") {}
        
        else if (operator.id == "equalsbutton") {
            

            if ((currentOperator != null) && (calculation.innerText.slice(-1) != "/\d/")) {
                currentNum = displayResult.innerText
                calculation.innerText = lastNum + " " + currentOperator + " " + currentNum + " " + operaterText
                displayResult.innerText = evaluate(lastNum, currentNum, currentOperator)
                currentResult = displayResult.innerText
                currentOperator = null
                isResult = true
                currentResult = displayResult.innerText
            }
            else if (currentOperator == null) {
                calculation.innerText = displayResult.innerText + " " + operator.innerText
                isResult = true
                currentResult = displayResult.innerText   
            }
                  
        }


        else {
            
            if (currentOperator == null) {
                calculation.innerText = displayResult.innerText + " " + operator.innerText
                currentOperator = operaterText
                lastNum = displayResult.innerText
                displayResult.innerText = 0
            }
            else {
                currentNum = displayResult.innerText
                evaluate (lastNum, currentNum, operator.innerText)
                calculation.innerText = evaluate (lastNum, currentNum, operator.innerText)
                isResult = true;
                currentResult = displayResult.innerText
            }
        }
    }
}


clearButton.onclick = () => {
    calculation.innerText = calculationStartText
    displayResult.innerText = 0
}

deleteButton.onclick = () => {
    displayResult.innerText = displayResult.innerText.substring(0, displayResult.innerText.length-1)
}



function evaluate(num1, num2, operator) {
    console.log(num1 + ", " + num2 + ", " + operator)
    switch (operator) {
        case "+":
            return parseFloat(num1) + parseFloat(num2)
            
        case "-":
            return num1 - num2;
        case "×":
            return num1 * num2;
        case "÷":
            if (num2 == 0) {
                return "you can't divide by 0"
            }
            else return num1/num2;
    }
}


