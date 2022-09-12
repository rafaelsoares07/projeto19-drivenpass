import { Router } from "express";
const router = Router()

import * as notesController from "../controllers/notesController"

import tokenValidation from "../middlewares/validateToken";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import createNoteSchema from "../schemas/createNoteSchema"


router.post(
    "/create/notes",
    validateSchemaMiddleware(createNoteSchema),
    tokenValidation,
    notesController.createNote
)

router.get( 
    "/find/note/:id",
    tokenValidation,
    notesController.findNotesWithUserId
)

router.delete(
    "/delete/note/:id",
    tokenValidation,
    notesController.deleteNotesWithUserId
    )

router.get(
    "/findAll/notes",
    tokenValidation,
    notesController.findAllNotes
)


export default router