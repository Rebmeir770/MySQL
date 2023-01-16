import Joi, { required } from "joi";

export const UserJoi = Joi.object({
    
    token:Joi.string().required(),
    
}) 