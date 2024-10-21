const repeatString = function(string, num) {
    let output = [];
    if(num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        output.push(string);
    };
    return output.join("");
};

// Do not edit below this line
module.exports = repeatString;
