const register = calculator();

const display = document.querySelector('.display')
const nums = document.querySelectorAll('.num')
const clear = document.getElementById('clear')
const balance = document.getElementById('getBalance')
const deposit = document.getElementById('depositCash')
const withdraw = document.getElementById('withdrawCash')
const ops = document.querySelectorAll('.op')
const equals = document.getElementById('equal')
const dec = document.getElementById('dec')

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click',updateDisplay)
}

for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener('click',operators)
}
function operators(){
    register.saveMemory()
    register.clearTotal()
    if(this.id === 'add'){
        op = '+'
        display.value = 0   
    }else if (this.id === 'minus'){
        op = '-'
        display.value = 0
    }else if (this.id === 'multiply'){
        op = 'X'
        display.value = 0
    }else if(this.id === 'divide'){
        op = '/'
        display.value = 0
    }
}

function updateDisplay(){
    register.load(this.value);
    display.value = register.getTotal();
}

clear.addEventListener('click',clearDisplay)
function clearDisplay() {
    display.value = register.clearTotal();
    register.clearMemory();
}

balance.addEventListener('click',getBalance)

function getBalance(){
    register.getBalance()
    display.value = register.getTotal();
}

deposit.addEventListener('click',depositCash)

function depositCash(){
    register.deposit(display.value)
}
withdraw.addEventListener('click',withdrawCash)

function withdrawCash(){
    register.withdraw(display.value)
}

equals.addEventListener('click',compute)
function compute (){
    if(op === '+'){
        let newTotal = parseFloat(register.recallMemory()) + parseFloat(display.value);
        display.value = newTotal;
    } else if (op === '-'){
        let newTotal = parseFloat(register.recallMemory()) - parseFloat(display.value);
        display.value = newTotal
    }else if(op === '/'){
        let newTotal = parseFloat(register.recallMemory()) / parseFloat(display.value);
        display.value = Math.round(100*newTotal)/100;
    }else if(op === 'X'){
        let newTotal = parseFloat(register.recallMemory()) * parseFloat(display.value);
        display.value = newTotal;
    }
}

dec.addEventListener('click',inputDec)

function inputDec() {
    if(this.id === 'dec' && display.value.indexOf('.')!== -1){
        
    } else {
        display.value += this.value;
        register.addDec();   
    }   
}
