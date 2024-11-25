const fibonacci = function(index) {
    let fib = [0,1];
    if(index < 0){
        return "OOPS";
    }
    for(let i = 1; i < index; i++){
        fib.push(fib[i-1] + fib[i]);
    }
return fib[index];
};

// Do not edit below this line
module.exports = fibonacci;
