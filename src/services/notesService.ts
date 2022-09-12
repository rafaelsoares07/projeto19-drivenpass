import * as noteRepository from "../repository/notesRepository"



export async function createNote(noteData:any,idUser:number) {

    const findDuplicateTitle = await noteRepository.findDuplicateByTitle(noteData.title,Number(idUser))

    if(findDuplicateTitle){
        throw {type:"bad_request" , message:"voce ja cadastrou outra nota com mesmo titulo"}
    }
    
    const resul = noteRepository.createNote(noteData,idUser)
    
    return resul
}

export async function findByIdNotes(noteId:number, userId:number) {

    const note = await noteRepository.noteExist(noteId)
    if(!note){
        throw {type:"bad_request", message:"Nota com esse id não existe"}
    }

    if(note.userId!=userId){
        throw {type:"bad_request", message:"Nota existe, mas você não tá autorizado a ver"}
    }

    return note

}

export async function deleteNoteById(idNote:number,UserId:number) {


    const note = await noteRepository.noteExist(idNote)
    if(!note){
        throw {type:"bad_request", message:"Nota não existe"}
    }

    if(note.userId!=UserId){
        throw {type:"bad_request", message:"Nota existe, mas você não tá autorizado a deletar"}
    }

    const resul = await noteRepository.deleteNote(Number(idNote))

    return resul
}

export async function findAllNotes(idUser:number){
    const notes = await noteRepository.getAllNotes(idUser)
    if(!notes){
        throw {type:"bad_request", message:"Você não tem nenhuma"}
    }

    return notes
}