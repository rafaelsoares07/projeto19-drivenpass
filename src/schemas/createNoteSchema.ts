import joi from "joi"

const createNoteSchema = joi.object({
    title:joi.string().max(50).required(),
    content:joi.string().max(1000).required()
})


export default createNoteSchema