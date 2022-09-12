import joi from "joi"

const createCardSchema = joi.object({
    cardNumber:joi.string().required(),
    cardCVV:joi.string().required(),
    password:joi.string().required(),
    isVirtual:joi.boolean().required(),
    type:joi.string().required(),
    title:joi.string().required(),
    label:joi.string().required(),
    name:joi.string().required(),
    cardName:joi.string().required()
})


export default createCardSchema