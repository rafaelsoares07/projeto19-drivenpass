import Cryptr from "cryptr";
import dayjs from "dayjs";

//Repository
import * as cardRepository from "../repository/cardRepository";



export async function createCard(card:any, UserId:number){

    const findDuplicateTitle = await cardRepository.findDuplicateByTitle(card.title,UserId)
    if(findDuplicateTitle){
        throw {type:"bad_request" , message:"Você já cadastrou um card com esse com mesmo titulo"}
    }

    const cryptr = new Cryptr("senhasenha");
    const passwordEncrip = cryptr.encrypt(card.password)
    const cvvEncrip = cryptr.encrypt(card.cardCVV)

    const expirationDate = dayjs().add(5, 'year').format('MM/YY');

    const validcard = {
        userId:UserId,
        tagTitle:card.title,
        cardNumber:card.cardNumber,
        cardName:card.cardName,
        cardCVV:cvvEncrip,
        dateExpiration:expirationDate,
        password:passwordEncrip,
        isVirtual:card.isVirtual,
        type:card.type
    }

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

    //const passwordE= card.password
    const cryptr = new Cryptr("senhasenha");
    const passwordDecrip = cryptr.decrypt(card.password)
    const cvvCard = cryptr.decrypt(card.cardCVV)

    const validcard = {
        userId:UserId,
        tagTitle:card.tagTitle,
        cardNumber:card.cardNumber,
        cardName:card.cardName,
        cardCVV:cvvCard,
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

    const cryptr = new Cryptr("senhasenha");
    const cardValid= cards.map(el=>{
        el.password = cryptr.decrypt(el.password)
        el.cardCVV = cryptr.decrypt(el.cardCVV)
        return el
    })

    return cardValid
}