const Joi = require("@hapi/joi");

const signUp = Joi.object({   

    nome: Joi.string()
        .min(3)
        .max(20)
        .pattern(/^[a-zA-Z\s.]{2,80}$/)
        .required(),

    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        
    password: Joi.string()
        .required()
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{8,20}$/),
});

const Update = Joi.object({

    name: Joi.string()
        .optional()
        .regex(/^[a-zA-Z\s.]{2,80}$/),

    email: Joi.string()
        .optional()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .optional()
        .regex(/^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/),
});

module.exports = {
    signUp,
    Update,
};