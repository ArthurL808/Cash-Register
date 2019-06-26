function calculator() {
    var memory = 0;
    var total = 0;
    var balance = 100;
    var load = function(x) {
        if(parseFloat(x) === NaN){
            if(total !== 0 && parseFloat(total) !== NaN){
                total += x;
            }
        }else {
            if(total === 0){
                total = x;
            } else {
                total += x;
            }
        }
    }
    var getTotal = function(){
        return total 
    }
    var clearTotal = function(){
        return total = 0;
    }
    var add = function(x){
        if(typeof x === 'number'){
        return memory += x;
        }
    }
    var subtract = function(x){
        if(typeof x === 'number'){
            return total -= x
        }else{
            throw error;            
        }
    }
    var multiply = function (x){
        if(typeof x === 'number'){
        return total *= x
        }else{
            throw error;            
        }
    }
    var divide = function(x){
        if(typeof x == 'number'){
            return total /= x
        }else{
            throw error;            
        }
    }
    var recallMemory = function(){
        return memory
    }
    var saveMemory = function(){
        return memory = total
    }
    var clearMemory = function(){
        return memory = 0
    }
    var getBalance = function(){
        return total = balance;
    }
    var deposit = function(x){
        balance += parseFloat(x);
        clearTotal();
    }
    var withdraw = function(x){
        balance -= parseFloat(x);
        clearTotal();
    }
    return{
        load:load,
        getTotal:getTotal,
        add:add,
        subtract:subtract,
        multiply:multiply,
        divide:divide,
        recallMemory:recallMemory,
        saveMemory:saveMemory,
        clearMemory:clearMemory,
        clearTotal:clearTotal,
        getBalance:getBalance,
        deposit:deposit,
        withdraw:withdraw
    }
}
