import prisma from "../database/database";


import { IUserCreate } from "../types/UserTypes";


export async function createUser(user:IUserCreate){
    const result = await prisma.users.create({
        data:{
            name:user.name,
            email:user.email,
            password:user.password
        }
    })
    return result
}


export async function findUser(email:string){
    const result = await prisma.users.findUnique({where:{email:email}})
    return result
}