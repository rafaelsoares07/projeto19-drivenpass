import { Request, Response } from "express";

import * as cardService from "../services/cardService";

export async function createCard(req:Request, res:Response) {
    
    const userId = res.locals.token
    const cardData = req.body

    const resul = await cardService.createCard(cardData,Number(userId))

    res.status(200).send(resul)
}

export async function findCardWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const cardId = req.params.id
    
    const resul = await cardService.findByIdCard(Number(cardId),Number(userId))

    res.status(201).send(resul)
}

export async function deleteCardlWithUserId(req:Request, res:Response) {

    const userId = res.locals.token
    const cardId = req.params.id
    
    const resul = await cardService.deleteCardById(Number(cardId),Number(userId))


    res.status(201).send(resul)
}

export async function findAllCards(req:Request, res:Response) {
    const userId = res.locals.token

    const resul = await cardService.findAllCards(Number(userId))

    res.status(201).send(resul)
}