const buttons = document.querySelectorAll('button')
const displayResult = document.getElementById('result')
const equalsButton = document.getElementById('equalsbutton')
const calculationButton = document.getElementById('calculation')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')

const numberButtons = document.getElementsByClassName('numbers')
for (let number of numberButtons) {
    number.onclick = (e) => addNumbers(e.target.innerText)
}

function addNumbers (number) {
    if (displayResult.innerText == '0') {
        displayResult.innerText = number;
    }
    else {
    displayResult.innerText += number;
    }
    console.log(displayResult.innerText)
}




equalsButton.onclick = () => {
    calculationButton.innerText = displayResult.innerText
}



clearButton.onclick = () => {
    displayResult.innerText = 0;
    calculationButton.innerText = "-";
}



// for (let button of buttons) {
// button.onclick = (e) => {
//     const buttonContent = e.target.innerText;
    

//     const numbersButtonsText = /[0-9]/
//     const operatorsButtonsText = /[+-×÷]/
    
//     if (numbersButtonsText.test(buttonContent)) {
        
//     }

//     else if (operatorsButtonsText.test(buttonContent)) {
        
//     }
// }}