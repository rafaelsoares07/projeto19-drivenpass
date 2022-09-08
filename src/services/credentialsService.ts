//Pacotes Diversos
import { prisma } from "@prisma/client";


//Repository
//import {createUser, findUser} from "../repository/authRepository";

//Tipagem TypeScript 
import { ICreateCredential } from "../types/CredentialsTypes"


export async function(credential:ICreateCredential){

    const {userName,label,name,title} = credential
    
}