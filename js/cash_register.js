const register = calculator();

const display = document.querySelector('.display')
const calculatorKeys = document.querySelectorAll('button')
const clear = document.getElementById('clear')
const balance = document.getElementById('getBalance')
const deposit = document.getElementById('depositCash')
const withdraw = document.getElementById('withdrawCash')
const ops = document.querySelectorAll('.op')

for (let i = 0; i < calculatorKeys.length; i++) {
    calculatorKeys[i].addEventListener('click',updateDisplay)
}

function updateDisplay(){
    register.load(this.value);
    display.value = register.getTotal();
}

clear.addEventListener('click',clearDisplay)
function clearDisplay() {
    register.clearTotal();
    register.clearMemory();
}

balance.addEventListener('click',getBalance)

function getBalance(){
    register.getBalance()
    display.value = register.getTotal();
}

deposit.addEventListener('click',depositCash)

function depositCash(){
    register.deposit()
}
withdraw.addEventListener('click',withdrawCash)

function withdrawCash(){
    register.withdraw()
}

ops[3].addEventListener('click',plus)
function plus(){
    register.add();
}

ops[4].addEventListener('click',equal)

function equal(){
    register.recallMemory()
}