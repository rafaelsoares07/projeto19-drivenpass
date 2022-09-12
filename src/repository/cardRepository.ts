import prisma from "../database/database";


export async function findDuplicateByTitle(title:string, userId:number){

    const result = await prisma.cards.findFirst({where: {tagTitle:title, userId:userId}})
    return result
}

export async function insertNewCard(card:any,userId:number) {
    const result = await prisma.cards.create({
        data:{
            userId:userId,      
            tagTitle:card.tagTitle,
            cardNumber:card.cardNumber,
            cardName:card.cardName,
            cardCVV:card.cardCVV,
            dateExpiration:card.dateExpiration,
            password:card.password,
            isVirtual:card.isVirtual,
            type:card.type
        }
    })
    return result

}

export async function cardExist(idCard:number){

    const result = await prisma.cards.findFirst({where: {id:idCard}})

    console.log(result)
    return result
}

export async function deleteCardWithIdR(idCard:number){

    const result = await prisma.cards.delete({where:{id:idCard}})

    console.log(result)
    return result
}

export async function getAllCards(idUser:number) {
    const result = await prisma.cards.findMany({where: {userId:idUser}})

    console.log(result)
    return result
}