import { Router } from "express";
const router = Router()

import * as cardController from "../controllers/cardController"

import tokenValidation from "../middlewares/validateToken";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import createCardSchema from "../schemas/createCardSchema"

 
router.post(
    "/create/card",
    validateSchemaMiddleware(createCardSchema),
    tokenValidation,
    cardController.createCard
)

router.get(
    "/find/card/:id",
    tokenValidation,
    cardController.findCardWithUserId
)

router.delete(
    "/delete/card/:id",
    tokenValidation,
    cardController.deleteCardlWithUserId
)
router.get(
    "/findAll/cards",
    tokenValidation,
    cardController.findAllCards
)

export default router