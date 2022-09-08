import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import "express-async-errors" 

import router from "./routes/index";

import errorHandleMiddleware from "./middlewares/errorHandleMiddleware"

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandleMiddleware)

// app.get("/users", (req, res)=>{

//     res.status(200).send("fUNFOU")
// })


const PORT = process.env.PORT || 4009
app.listen(PORT, ()=>console.log("Servidor rodando na porta: "+PORT))
