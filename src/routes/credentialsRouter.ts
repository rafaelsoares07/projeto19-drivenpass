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


export default router