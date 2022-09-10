import { findCredentialWithUserId } from "../controllers/credentialsController";
import prisma from "../database/database";



export async function createNote(noteData:any, id:number) {
    const resul = await prisma.notes.create({
        data:{
            userId:id,
            content: noteData.content,
            tagTitle:noteData.title,
        }
    })

    return resul
}



export async function findDuplicateByTitle(title:string, id:number) {
    const result = await prisma.notes.findFirst({where: {tagTitle:title, userId:id}})

    console.log(result)
    return result
}



export async function noteExist(noteId:number) {
    const resul = prisma.notes.findFirst({where:{id:noteId}})
    return resul
}


export async function deleteNote(noteId:number) {
    const resul = await prisma.notes.delete({where:{id:noteId}})
    return resul
}