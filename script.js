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
var lastNum = null;
var currentNum = null;

for (let number of numberButtons) {
    number.onclick = (e) => updateResult(e.target)
}


for (let operator of operatorButtons) {
    operator.onclick = (e) => {
        // evaluate()
        // currentOperator = operator.innerText;
        if (secondOperator) {
            updateEquasion(e.target)
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
        secondOperator = true;
        updateEquasion(input)
    }

    
    else if (input.id == "equalsbutton") {
        updateEquasion(input)
    }

}


function updateEquasion (input) {
    if (input.id == "equalsbutton") {
        calculation.innerText = displayResult.innerText + " " + input.innerText;
    }
    else if (calculation.innerText == "-") {
        calculation.innerText = input.innerText
    }
    else calculation.innerText = displayResult.innerText
}



equalsButton.onclick = (e) => updateResult(e.target)




clearButton.onclick = () => {
    displayResult.innerText = 0;
    calculation.innerText = "-";
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



function evaluate(lastNum, currentNum, operator) {
    switch (operator) {
        case "+":
            return lastNum + currentNum;
        case "-":
            return lastNum - currentNum;
        case "×":
            return lastNum * currentNum;
        case "÷":
            if (currentNum == 0) {
                return "you can't divide by 0"
            }
            else return lastNum/currentNum;
    }
}


