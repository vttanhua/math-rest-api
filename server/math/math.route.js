const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const router = express.Router(); 

const mathCtrl = require('./math.controller');



router.route('/:value')
  .get(validate(paramValidation.isPrime),mathCtrl.isPrime)

router.route('/')
	.post(validate(paramValidation.calculateSum), mathCtrl.calculateSum)

module.exports = router;