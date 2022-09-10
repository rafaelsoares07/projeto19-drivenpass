import { Router } from "express";
import authRouter from "../routes/authRouter"
import credentialsRouter from "../routes/credentialsRouter"
import notesRouter from "../routes/notesRoutes"
import wifiRouter from "../routes/wifiRouter"
const router = Router()

router.use(authRouter)
router.use(credentialsRouter)
router.use(notesRouter)
router.use(wifiRouter)

export default router


