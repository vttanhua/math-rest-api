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

  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
