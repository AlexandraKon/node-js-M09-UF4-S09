const Joi = require('joi');

module.exports.add = Joi.object({
    modelo: Joi.string().required(),
    price: Joi.number().required(),
    ram: Joi.number().required(),
    cpa: Joi.string().required(),
    pulgadas: Joi.number().required(),
});

module.exports.update = Joi.object({
    modelo: Joi.string().optional(),
    price: Joi.number().optional(),
    ram: Joi.number().optional(),
    cpa: Joi.string().optional(),
    pulgadas: Joi.number().optional(),
});

module.exports.updateParams = Joi.object({
    modelo: Joi.string().required(),
});