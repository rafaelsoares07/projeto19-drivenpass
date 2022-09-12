import prisma from "../database/database";

import { ICreateCredential } from "../types/CredentialsTypes"

export async function findDuplicateByTitle(title:string, userId:number){

    const result = await prisma.credentyals.findFirst({where: {title:title, userId:userId}})

    console.log(result)
    return result
}

export async function insertNewCredential(credential:ICreateCredential,userId:number) {
    const result = await prisma.credentyals.create({
        data:{
            userId:userId,
            userName:credential.userName,
            password:credential.password,
            url:credential.url,
            label:credential.label,
            name:credential.name,
            title:credential.title
        }
    })
    return result

}

export async function credentialExist(idCredential:number){

    const result = await prisma.credentyals.findFirst({where: {id:idCredential}})

    console.log(result)
    return result
}

export async function deleteCredentialWithIdR(idCredential:number){

    const result = await prisma.credentyals.delete({where:{id:idCredential}})

    console.log(result)
    return result
}

export async function getAllCredentials(idUser:number) {
    const result = await prisma.credentyals.findMany({where: {userId:idUser}})

    console.log(result)
    return result
}