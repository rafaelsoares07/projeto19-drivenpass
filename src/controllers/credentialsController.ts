import { Request, Response } from "express";

import * as credentialsService from "../services/credentialsService"

export async function createCredentials(req:Request, res:Response) {
    

    const userId = res.locals.token
    const credentialData = req.body

    const resul = await credentialsService.createCredential(credentialData,Number(userId))


    res.status(200).send(resul)

}

export async function findCredentialWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const credentialId = req.params.id
    
    const resul = await credentialsService.findByIdCredential(Number(credentialId),Number(userId))

    res.status(201).send(resul)
}

export async function deleteCredentialWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const credentialId = req.params.id
    
    const resul = await credentialsService.deleteCredentialById(Number(credentialId),Number(userId))

    res.status(201).send(resul)
}

export async function findAllCredentials(req:Request, res:Response){
    const userId = res.locals.token

    const resul = await credentialsService.findAllCredentials(Number(userId))


    res.status(201).send(resul)
}