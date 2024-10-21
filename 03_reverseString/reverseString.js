const reverseString = function(string) {
let splitString = string.split("");
let reversedArray = [];
for(let i = splitString.length-1; i >= 0; i--){
    reversedArray.push(splitString[i]);
};
return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
