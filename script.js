const buttons = document.querySelectorAll('button')
const displayResult = document.querySelector('.result')



for (let button of buttons) {
button.onclick = (e) => {
    const buttonContent = e.target.innerText;
    if (buttonContent.contains("[0-9]")) {
        displayResult.innerText = buttonContent;
    }
}}