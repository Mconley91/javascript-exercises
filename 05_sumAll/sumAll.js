const sumAll = function(firstNum, secondNum) {
    let container = 0;
    let startNum = firstNum < secondNum ? firstNum : secondNum;
    let endNum = firstNum < secondNum ? secondNum : firstNum;

    if(startNum < 0 || endNum < 0 || startNum != Math.round(startNum) || endNum != Math.round(endNum) || typeof startNum != 'number' || typeof endNum != 'number'){
        return 'ERROR';
    }
    else{
        for (let i = startNum; i <= endNum; i++){
            container += i;
        }
        console.log(container);
        return container;
    }
};

// Do not edit below this line
module.exports = sumAll;
