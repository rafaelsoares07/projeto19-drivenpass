import { Router } from "express";
const router = Router()

import * as credentialsController from "../controllers/credentialsController"

import tokenValidation from "../middlewares/validateToken";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import createCredentialsSchema from "../schemas/createCredentialsSchema"


router.post(
    "/create/credentials",
    validateSchemaMiddleware(createCredentialsSchema),
    tokenValidation,
    credentialsController.createCredentials
)

router.get(
    "/find/credential/:id",
    tokenValidation,
    credentialsController.findCredentialWithUserId
)

router.delete(
    "/delete/credential/:id",
    tokenValidation,
    credentialsController.deleteCredentialWithUserId
)


export default router