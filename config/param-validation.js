const Joi = require('joi');

module.exports = {
  
   
  //GET BASE_PATH/math
  isPrime:{
    params: {
      value: Joi.number().required()
    }
  },

  //POST BASE_PATH/math
    calculateSum:{
    body: {
      values: Joi.array().items(Joi.number()).required(),
    }
  },

 
};
