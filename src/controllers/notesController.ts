import { Request, Response } from "express";

import * as noteServices from "../services/notesService"

export async function createNote(req:Request, res:Response) {
    

    const userId = res.locals.token
    const noteData = req.body

    const resul = await noteServices.createNote(noteData,Number(userId))


    res.status(200).send(resul)

}


export async function findNotesWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const noteId = req.params.id
    

    const resul = await noteServices.findByIdNotes(Number(noteId),Number(userId))


    res.status(201).send(resul)
}

 

export async function deleteNotesWithUserId(req:Request, res:Response) {
    
    const idUser = res.locals.token
    const idNote = req.params.id

    const resul = await noteServices.deleteNoteById(Number(idNote), idUser)


    res.status(200).send("deletado com sucesso")
} 


export async function findAllNotes(req:Request, res:Response) {
    const userId = res.locals.token

    const resul = await noteServices.findAllNotes(Number(userId))

    res.status(201).send(resul)
}