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
        throw {type:"bad_request", message:"nao tem wifi com esse id "}
    }

    if(wifiExist.userId!=idUser){
        throw {type:"bad_request", message:"tem o wifi, mas nçao é seu"}
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
        throw {type:"bad_request", message:"wifi com esse id nao existe"}
    }

    if(wifiExist.userId!=userId){
        throw {type:"bad_request", message:"wifi existe mas tu nao é o dono pra deletar"}
    }

    const resul = await wifiRepository.deleteWifi(wifiId)

    return resul
}