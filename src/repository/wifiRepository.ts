import prisma from "../database/database";



export async function createWifi(wifiData:any, id:number) {
    const resul = await prisma.addresswifi.create({
        data:{
            userId:id,
            tagTitle:wifiData.title,
            name:wifiData.name,
            password:wifiData.password,
            label:wifiData.label
        }
    })

    return resul
}

// model addresswifi {
//     id       Int    @id(map: "addressWifi_pk") @default(autoincrement())
//     userId   Int
//     tagTitle String
//     name     String
//     password String
//     users    users  @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "addressWifi_fk0")
//   }



export async function findDuplicateByTitle(title:string, id:number) {
    const result = await prisma.addresswifi.findFirst({where: {tagTitle:title, userId:id}})
    return result
}



export async function wifiExist(wifiId:number) {
    const resul = prisma.addresswifi.findFirst({where:{id:wifiId}})
    return resul
}


export async function deleteWifi(wifiId:number) {
    const resul = await prisma.addresswifi.delete({where:{id:wifiId}})
    return resul
}