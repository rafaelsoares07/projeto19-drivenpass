import { Router } from "express";
const router = Router()

import * as wifiController from "../controllers/wifiController"

import tokenValidation from "../middlewares/validateToken";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import createWifiSchema from "../schemas/createWIfiSchema"


router.post(
    "/create/wifi",
    validateSchemaMiddleware(createWifiSchema),
    tokenValidation,
    wifiController.createWifi
)

router.get( 
    "/find/wifi/:id",
    tokenValidation,
    wifiController.findWifiById
)

router.delete(
    "/delete/wifi/:id",
    tokenValidation,
    wifiController.deleteWifiWithUserId
)

router.get(
    "/findAll/wifis",
    tokenValidation,
    wifiController.findAllWifis
)

export default router