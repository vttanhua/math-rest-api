const math = require('./math.service.js');

function isPrime(req, res) {
  	return res.json({"isPrime":math.isPrime(req.params.value)});
}

function calculateSum(req,res){
	var sumOfValues = math.calculateSum(req.body.values);
	var isPrime = math.isPrime(sumOfValues);
	return res.json({"sum":sumOfValues,"isPrime":isPrime});
}


module.exports = { isPrime, calculateSum };