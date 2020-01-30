math = require('mathjs');


function isPrime(value){
	return isPrimeResult = !math.isNegative(value)&&math.isInteger(value)&&math.isPrime(value);
}

function calculateSum(valueArray){
	return math.sum(valueArray);
}

function addTwo(value1,value2){
	return value1+value2;
}

module.exports = { isPrime, calculateSum, addTwo };