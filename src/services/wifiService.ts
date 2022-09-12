import * as wifiRepository from "../repository/wifiRepository"
import Cryptr from "cryptr"


export async function createWifi(wifiData:any,idUser:any) {

    const cryptr = new Cryptr("senhasenha");
    const passwordEncrip = cryptr.encrypt(wifiData.password)

    delete wifiData.password

    const wifiDataValid = {
        ...wifiData,
        password:passwordEncrip
    }
    
    const resul = await wifiRepository.createWifi(wifiDataValid,idUser)
}

export async function findWifiById(wifiId:number, idUser:any) {
    
    const wifiExist = await wifiRepository.wifiExist(wifiId)

    if(!wifiExist){
        throw {type:"bad_request", message:"Não existe wifi com esse id "}
    }

    if(wifiExist.userId!=idUser){
        throw {type:"bad_request", message:"Existe wifi, mas você não tá autorizado"}
    }
 
    const cryptr = new Cryptr("senhasenha");
    const passwordDecrip = cryptr.decrypt(wifiExist.password)
    
    const wifiData={
        ...wifiExist,
        passwordDecrip
    }



    return wifiData
}

export async function deleteWifi(userId:number, wifiId:number) {
    const wifiExist = await wifiRepository.wifiExist(wifiId)
    if(!wifiExist){
        throw {type:"bad_request", message:"wifi com esse id não existe"}
    }

    if(wifiExist.userId!=userId){
        throw {type:"bad_request", message:"wifi existe, mas você não pode deletar"}
    }

    const resul = await wifiRepository.deleteWifi(wifiId)

    return resul
}

export async function findAllWifis(idUser:number){
    const wifis = await wifiRepository.getAllWifis(idUser)
    if(!wifis){
        throw {type:"bad_request", message:"Você não tem nenhuma"}
    }

    return wifis
}