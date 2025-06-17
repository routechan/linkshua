import { revalidatePath } from "next/cache";
import { prisma } from "../prisma/prisma";

export async function fetchLinkData(groupId:string){
    try{
    const linkData = await prisma.linkGroup.findUnique({
        where:{id:groupId},
        include:{links:true}
    })
    return linkData

}catch(error){
    return
}
    
}

export async function deleteLink(id:string){
    try{
    const response = await prisma.link.delete({
        where:{id}
    })
    revalidatePath(`/`)
}catch(error){
    return
}
}

export async function fetchLink(id:string){
try{
 const link = await prisma.link.findUnique({
    where:{id}
 })
 return link
}catch(error){
    return
}
}