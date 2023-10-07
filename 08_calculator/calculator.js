const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  if(arr[0] === undefined){
    return 0
  }
  let sumArr = arr.reduce((sum, number) => {return sum + number});

	return sumArr
};

const multiply = function(arr) {
  let multiplyArr = arr.reduce((multiply, number) => {return multiply * number}, 1);

	return multiplyArr
};

const power = function(num, power) {
  let result = num;
	for(let i = 1; i < power; i++){
    result = result * num;

  }

  return result
};

const factorial = function(num) {
  let result = 1;
  
	if(num === 0 || num === 1){
    return 1
  }

  for(let i = num; i != 0; i--){
    result = result * i;

  }
  return result
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
