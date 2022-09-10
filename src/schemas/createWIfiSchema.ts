import joi from "joi"

const createWifiSchema = joi.object({
    password:joi.string().required(),
    nameWifi:joi.string().required(),
    name:joi.string().required(),
    title:joi.string().required(),
    label:joi.string().required()

})

export default createWifiSchema