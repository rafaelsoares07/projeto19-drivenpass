import { Router } from "express";
import authRouter from "../routes/authRouter"
import credentialsRouter from "../routes/credentialsRouter"
import notesRouter from "../routes/notesRoutes"
import wifiRouter from "../routes/wifiRouter"
import cardRouter from "../routes/cardRouter"

const router = Router()

router.use(authRouter)
router.use(credentialsRouter)
router.use(notesRouter)
router.use(wifiRouter)
router.use(cardRouter)

export default router


