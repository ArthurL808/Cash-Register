var getScreen = document.querySelector('.calculator-screen')
// console.log(getScreen)
var getCalculatorKeys = document.querySelectorAll('button')
// console.log(getCalculatorKeys)
for (let i = 0; i < getCalculatorKeys.length; i++) {
    getCalculatorKeys[i].addEventListener('click',numinput)
    
}

function numinput(){
    getScreen.value += this.value;
}