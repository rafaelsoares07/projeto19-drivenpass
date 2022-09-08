//Pacotes Diversos
import { prisma } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Repository
import {createUser, findUser} from "../repository/authRepository";

//Tipagem TypeScript 
import { IUserCreate, IUserLogin } from "../types/UserTypes";



export async function createUsuario(user:IUserCreate) {

    const {name, password,email} = user

    const userExist = await findUser(user.email)

    if(userExist){
        throw {type:"bad_request", message:"usuario já tem um cadastro"}
    }

    if(user.password.length<10){
        throw {type:"bad_request", message:"Senha precisa ter mais de 10 caracters"}
    }
    
    const passwordHash = bcrypt.hashSync(password,10)

    const userData = {
        name,
        email,
        password:passwordHash
    }

    await createUser(userData)
}

export async function loginUsuario(user:IUserLogin) {
    
    const {email, password} = user

    const userExist = await findUser(email)
    if(!userExist){
        throw {type:"bad_request" , message:"Você precisa ter um cadastro para poder fazer um login"}
    }

    const passwordValid = bcrypt.compareSync(password, userExist.password)
    console.log(passwordValid)
    if(!passwordValid){
        throw {type:"bad_request", message:"Senha informada está incorreta"}
    }


    const id = (userExist.id.toString())
    const token = jwt.sign(id,"secret")

    return token
}