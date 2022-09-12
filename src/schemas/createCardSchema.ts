import joi from "joi"

const createCardSchema = joi.object({
    cardNumber:joi.string().min(16).max(16).required(),
    cardCVV:joi.string().min(3).max(3).required(),
    password:joi.string().min(4).max(4).required(),
    isVirtual:joi.boolean().required(),
    type:joi.string().valid("credito","debito","ambos").required(),
    title:joi.string().required(),
    label:joi.string().required(),
    name:joi.string().required(),
    cardName:joi.string().required(),
    
})


export default createCardSchema