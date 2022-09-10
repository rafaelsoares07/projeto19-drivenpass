import { Request, Response } from "express";

import { createCredential, findByIdCredential, deleteCredentialById } from "../services/credentialsService";

export async function createCredentials(req:Request, res:Response) {
    

    const userId = res.locals.token
    const credentialData = req.body

    const resul = await createCredential(credentialData,Number(userId))


    res.status(200).send(resul)

}


export async function findCredentialWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const credentialId = req.params.id
    

    const resul = await findByIdCredential(Number(credentialId),Number(userId))

    console.log(userId+ " olha eu papaê" +credentialId)


    res.status(201).send(resul)
}

export async function deleteCredentialWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const credentialId = req.params.id
    

    const resul = await deleteCredentialById(Number(credentialId),Number(userId))

    console.log(userId+ " olha eu papaê" +credentialId)


    res.status(201).send(resul)
}