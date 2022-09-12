import Cryptr from "cryptr";
import dayjs from "dayjs";

//Repository
import * as cardRepository from "../repository/cardRepository";



export async function createCard(card:any, UserId:number){

    console.log(card)
   

    const findDuplicateTitle = await cardRepository.findDuplicateByTitle(card.title,UserId)
    if(findDuplicateTitle){
        throw {type:"bad_request" , message:"Você já cadastrou um card com esse com mesmo titulo"}
    }

    const cryptr = new Cryptr("senhasenha");
    const passwordEncrip = cryptr.encrypt(card.password)

    console.log(passwordEncrip)

    const expirationDate = dayjs().add(5, 'year').format('MM/YY');

    const validcard = {
        userId:UserId,
        tagTitle:card.title,
        cardNumber:card.cardNumber,
        cardName:card.cardName,
        cardCVV:card.cardCVV,
        dateExpiration:expirationDate,
        password:passwordEncrip,
        isVirtual:card.isVirtual,
        type:card.type
    }
    console.log("--------")
    console.log(validcard)

    const resul = await cardRepository.insertNewCard(validcard,UserId)


    return resul
    
}

export async function findByIdCard(idCard:number,UserId:number) {


    const card = await cardRepository.cardExist(idCard)
    if(!card){
        throw {type:"bad_request", message:"Card com esse id não existe"}
    }

    if(card.userId!=UserId){
        throw {type:"bad_request", message:"Card existe, mas você não ta autorizado"}
    }


    const passwordE= card.password
    const cryptr = new Cryptr("senhasenha");
    const passwordDecrip = cryptr.decrypt(passwordE)

    console.log(passwordDecrip)
    


    const validcard = {
        userId:UserId,
        tagTitle:card.tagTitle,
        cardNumber:card.cardNumber,
        cardName:card.cardName,
        cardCVV:card.cardCVV,
        dateExpiration:card.dateExpiration,
        password:passwordDecrip,
        isVirtual:card.isVirtual,
        type:card.type
    }

    return validcard
}

export async function deleteCardById(idCard:number,UserId:number) {


    const card = await cardRepository.cardExist(idCard)
    if(!card){
        throw {type:"bad_request", message:"Card com esse id não existe para ser apagado"}
    }

    if(card.userId!=UserId){
        throw {type:"bad_request", message:"Card existe, mas você não tá autorizado a deletar"}
    }

    const resul:object = await cardRepository.deleteCardWithIdR(idCard)

    return resul
}

export async function findAllCards(idUser:number){
    const cards = await cardRepository.getAllCards(idUser)
    if(!cards){
        throw {type:"bad_request", message:"Você não tem nenhuma"}
    }

    return cards
}