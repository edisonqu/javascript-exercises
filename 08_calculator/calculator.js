const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(x) {
  var sum = 0
  x.forEach(num =>{
    sum+=num
  })
  return sum
};

const multiply = function(x) {
  var prod = 1;
  x.forEach(num => {
    prod *= num
  })

  return prod
};

const power = function(x,y) {
  return x**y
};

const factorial = function(x) {
  var fact = 1
  for (let i = 1; i < x+1; i++) {
    fact *= i
  }
  return fact
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
