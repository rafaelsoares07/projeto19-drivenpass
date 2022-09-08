import { Router } from "express";
const router = Router()

import * as authController from "../controllers/authController"

import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import createUserSchema from "../schemas/createUserSchema"
import loginUserSchema from "../schemas/loginUserSchema"

router.post("/signup",validateSchemaMiddleware(createUserSchema), authController.createUser)
router.post("/signin", validateSchemaMiddleware(loginUserSchema), authController.loginUser)

export default router