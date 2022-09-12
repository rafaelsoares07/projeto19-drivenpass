//Imports padrão dos controllers
import { Request, Response } from "express";
import * as authService from "../services/authService"


export async function createUser(req:Request, res:Response){

    const result = await authService.createUsuario(req.body)
    
    res.status(200).send("Usuário cadastrado com sucesso no site!")
}

export async function loginUser(req:Request , res:Response) {
    
    const resul = await authService.loginUsuario(req.body)

    res.status(200).send("Login feito com sucesso")
}