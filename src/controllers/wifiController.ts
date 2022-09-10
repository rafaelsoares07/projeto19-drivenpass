import { Request, Response } from "express";

import * as wifiService from "../services/wifiService"



export async function createWifi(req:Request, res:Response) {
    
    const userId = res.locals.token
    const wifiData = req.body

    const resul = await wifiService.createWifi(wifiData,Number(userId))

    res.status(200).send(resul)
}

export async function findWifiById(req:Request, res:Response){
    const userId = res.locals.token
    const wifiId = req.params.id

    const resul = await wifiService.findWifiById(Number(wifiId),Number(userId))

    res.status(200).send(resul)
}

export async function deleteWifiWithUserId(req:Request, res:Response) {
    
    const userId = res.locals.token
    const wifiId = req.params.id

    const resul = await wifiService.deleteWifi(Number(userId),Number(wifiId))

    res.status(200).send(resul)
}