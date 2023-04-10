const buttons = document.querySelectorAll('button')
const displayResult = document.getElementById('result')
const operatorButtons = document.getElementsByClassName('operators')
const equalsButton = document.getElementById('equalsbutton')
const calculation = document.getElementById('calculation')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const numberButtons = document.getElementsByClassName('numbers')

for (let number of numberButtons) {
    number.onclick = (e) => updateResult(e.target)
}

var currentOperator = null;
var secondOperator = true;

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
    console.log(input)
    if (input.classList == 'operators') {
    
        if (secondOperator) {
            displayResult.innerText = `${displayResult.innerText} ${input.innerText} `
            secondOperator = false;
        }
    }
    else if (input.classList == "numbers") {
        if (displayResult.innerText == '0')
        displayResult.innerText = input.innerText;
        else {
            displayResult.innerText = `${displayResult.innerText}${input.innerText}`
        }
        secondOperator = true;
    }
    
}


function updateEquasion (input) {
    calculation.innerText = `${displayResult.innerText} ${input.innerText}`
}


equalsButton.onclick = (e) => updateEquasion(e.target)



clearButton.onclick = () => {
    displayResult.innerText = 0;
    calculation.innerText = "";
}
