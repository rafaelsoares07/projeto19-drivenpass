import joi from "joi"

const createCredentialsSchema = joi.object({
    url:joi.string().uri().required(),
    userName:joi.string().required(),
    password:joi.string().required(),
    title: joi.string().required(),
    name:joi.string().required(),
    label:joi.string().required()
})

export default createCredentialsSchema