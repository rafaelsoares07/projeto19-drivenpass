import Cryptr from "cryptr";

//Repository
import { findDuplicateByTitle, insertNewCredential, credentialExist,deleteCredentialWithIdR, getAllCredentials } from "../repository/credentialRepository";

//Tipagem TypeScript 
import { ICreateCredential } from "../types/CredentialsTypes"


export async function createCredential(credential:ICreateCredential, UserId:number){

    console.log(credential)
    const {userName,url,label,name,title,password} = credential

    const findDuplicateTitle = await findDuplicateByTitle(title,UserId)
    if(findDuplicateTitle){
        throw {type:"bad_request" , message:"Você já cadastrou outra com mesmo titulo"}
    }

    const cryptr = new Cryptr("senhasenha");
    const passwordEncrip = cryptr.encrypt(password)

    console.log(passwordEncrip)

    const validCredential = {
        url,
        userName,
        password:passwordEncrip,
        title,
        name,
        label
    }

    const resul = await insertNewCredential(validCredential,UserId)


    return resul
    
}


export async function findByIdCredential(idCredential:number,UserId:number) {


    const credential = await credentialExist(idCredential)
    if(!credential){
        throw {type:"bad_request", message:"Credencial com esse id não existe"}
    }

    if(credential.userId!=UserId){
        throw {type:"bad_request", message:"Credencial existe, mas você não tá autorizado"}
    }

    //const resul= await findCredentialById(idCredential,UserId)

    const passwordE= credential.password
    const cryptr = new Cryptr("senhasenha");
    const passwordDecrip = cryptr.decrypt(passwordE)

    console.log(passwordDecrip)


    
    

    const validCredential = {
        url:credential.url,
        userName:credential.userName,
        password:passwordDecrip,
        title:credential.title,
        name:credential.name,
        label:credential.label
    }

    return validCredential
}


export async function deleteCredentialById(idCredential:number,UserId:number) {


    const credential = await credentialExist(idCredential)
    if(!credential){
        throw {type:"bad_request", message:"Credencial com esse id não existe para se deletada"}
    }

    if(credential.userId!=UserId){
        throw {type:"bad_request", message:"Credencial existe, mas você não tá autorizado a deletar"}
    }

    const resul:object = await deleteCredentialWithIdR(idCredential)

    return resul
}


export async function findAllCredentials(UserId:number) {
    const credentials = await getAllCredentials(UserId)
    if(!credentials){
        throw {type:"bad_request", message:"Você não tem nenhuma credencial registrada"}
    }

    return credentials

}