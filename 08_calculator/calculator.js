const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total,item)=>total += item,0);
};

const multiply = function(array) {
	return array.reduce((total,item)=>total * item,1);
};

const power = function(number, power) {
  let arr = [];
  for(let i = 0; i < power; i++){
    arr.push(number);
  };
  return arr.reduce((total,item)=>total * item,1);
};

const factorial = function(num) {
  let arr = [];
  for(let i = 1; i < num+1; i++){
    arr.push(i);
  };
  return arr.reduce((total,item)=>total * item,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
