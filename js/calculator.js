function calculator() {
    var memory = 0
    var total = 0;
    var load = function(x) {
       if(typeof x === 'number'){
        total = x
         return total
       }else{
           throw error;            
       }
    }
    var getTotal = function(){
        return total 
    }
    var add = function(x){
        if(typeof x === 'number'){
        return total += x
        }else{
            throw error;            
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
    }
}
