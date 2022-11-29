import Joi from "joi";

export const UserJoi = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
    name:Joi.string().required()
}) 