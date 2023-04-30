const buttons = document.querySelectorAll('button')
const displayResult = document.getElementById('result')

const operatorButtons = document.getElementsByClassName('operators')
const equalsButton = document.getElementById('equalsbutton')
const calculation = document.getElementById('calculation')
const calculationStartText = "enter your calculation"
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const numberButtons = document.getElementsByClassName('numbers')

var currentOperator = null;
var lastOperator = null;
var lastInputIsOperator = false
var lastNum = null;
var currentNum = null;

for (let number of numberButtons) {
    lastInputIsOperator = false
    number.onclick = (e) => updateResult(e.target)
}


//  {
//     operator.onclick = () => {
        
        
//         if (operator.id != "equalsbutton") {
            
//             if (!lastInputIsOperator){ 
                
//                 if (currentOperator != null) {
//                     evaluate(lastNum, currentNum, currentOperator)
//                 }
                
//                 else {
//                     currentNum = displayResult.innerText
//                     currentOperator = operator.innerText
//                 }
//                 // currentNum = displayResult.innerText
//                 // currentOperator = operator.innerText
//                 // updateResult(evaluate(lastNum, currentNum, currentOperator))
//                 // lastInputIsOperator = true
//             }
            
//             if (lastInputIsOperator) {
//                 currentOperator = operator.innerText
//                 calculation.innerText = calculation.innerText.slice(0, -1) + operator.innerText
//             }



//             else {
//                 lastNum = displayResult.innerText
//                 currentOperator = operator.innerText
//                 updateEquasion(operator)
//             }
//             updateResult(operator)
//         }.innerText {
    
for (let operator of operatorButtons) {
    operator.onclick = () => {
        
        

        if (displayResult.innerText == 0) {
            window.alert("Please type in your calculation first.")
        }

        else if (operator.id == "equalsbutton") {
            
            if (currentOperator != null) {
                currentNum = displayResult.innerText
                evaluate(lastNum, currentNum, currentOperator)
                currentOperator = null
            }
            else if (currentOperator == null) {
                calculation.innerText = displayResult.innerText + " " + operator.innerText
                        }
                    }


        else {
            
            if (currentOperator == null) {
                calculation.innerText = displayResult.innerText + " " + operator.innerText
                currentOperator = operator.innerText
                lastNum = displayResult.innerText
            }
            else {
                currentNum = displayResult.innerText
                evaluate (lastNum, currentNum, operator)
                calculation.innerText = evaluate (lastNum, currentNum, operator)

            }
        }
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
            currentNum = displayResult.innerTexts
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




clearButton.onclick = () => {
    displayResult.innerText = 0;
    calculation.innerText = "enter your calculation";
}




function evaluate(num1, num2, operator) {
    switch (operator.innerText) {
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


