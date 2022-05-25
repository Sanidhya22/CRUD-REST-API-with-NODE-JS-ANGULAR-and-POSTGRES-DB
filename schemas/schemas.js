var Joi =require('@hapi/joi');

const validator = Joi.object({ 
    login: Joi.string().required(),
    age: Joi.number()
      .integer()
      .min(4)
      .max(130)
      .required(),
})

module.exports= validator;