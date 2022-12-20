import Joi, { required } from "joi";

export const UserJoi = Joi.object({
    email:Joi.string(),
    password:Joi.string().required(),
    name:Joi.string().required()
    
}) 