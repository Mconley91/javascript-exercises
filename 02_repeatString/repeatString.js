const repeatString = function(string, num) {
    let output = [];
    for (let i = 0; i < num; i++){
        output.push(string);
    };
    return output.join("");
};

// Do not edit below this line
module.exports = repeatString;
