const buttons = document.querySelectorAll('button')
const displayResult = document.getElementById('result')
const operatorButtons = document.getElementsByClassName('operators')
const equalsButton = document.getElementById('equalsbutton')
const calculation = document.getElementById('calculation')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const numberButtons = document.getElementsByClassName('numbers')

var currentOperator = null;
var lastOperator = null;
var lastInputIsOperator = false
var lastNum = null;
var currentNum = null;

for (let number of numberButtons) {
    number.onclick = (e) => updateResult(e.target)
}


for (let operator of operatorButtons) {
    operator.onclick = (e) => {
        
        if (!lastInputIsOperator){ 
            currentNum = displayResult.innerText
            currentOperator = operator.innerText
            updateResult(evaluate(lastNum, currentNum, currentOperator))
            lastInputIsOperator = true
        }
        
        if (lastInputIsOperator) {

        }



        else {
            lastNum = displayResult.innerText
            currentOperator = operator.innerText
            updateEquasion(operator)
        }
        updateResult(e.target)
    }
}



function updateResult(input) {

    if (input.classList == "numbers") {
        if (displayResult.innerText == '0')
        displayResult.innerText = input.innerText;
        else {
            displayResult.innerText = `${displayResult.innerText}${input.innerText}`
        }
        lastInputIsOperator = false;
        currentNum = displayResult.innerText
    }

    
    else if (input.id == "equalsbutton") {
        if (lastOperator != null) {
            currentNum = displayResult.innerText
            updateEquasion(input)
            updateResult(evaluate(currentNum, lastNum, lastOperator))
        }
        else {
            
        }
    }

}



function updateEquasion (input) {
    console.log(input.classList)
    if (calculation.innerText == "enter your calculation") {
        calculation.innerText = input.innerText
    }
    else if (input.id == "equalsbutton") {
        calculation.innerText = displayResult.innerText + " " + input.innerText; 
    }
    else if (input.classList == "operators") {
        calculation.innerText = `${displayResult.innerText} ${input.innerText}`
    }
    else calculation.innerText = displayResult.innerText
}



equalsButton.onclick = (e) => {
    evaluate()
    updateResult(e.target)
}



clearButton.onclick = () => {
    displayResult.innerText = 0;
    calculation.innerText = "enter your calculation";
}
// if (input.classList == 'operators') {
        
//     if (secondOperator) {
//         lastNum = displayResult.innerText
//         console.log(lastNum)
//         displayResult.innerText = `${displayResult.innerText} ${input.innerText} `
//         secondOperator = false;
//     }
// }

// function operate(pressedButton) {
//     switch (pressedButton.target.innerText) {
//         case 
//         case
//         case

//     }
// }



function evaluate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
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


